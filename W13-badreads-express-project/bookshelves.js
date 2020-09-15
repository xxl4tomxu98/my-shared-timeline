const express = require('express');
const { check } = require("express-validator");
const { Op } = require('sequelize');
const { asyncHandler, handleValidationErrors } = require("../utils");

const router = express.Router()
const { User, Shelf, Book, Books_Shelf } = require('../db/models');


const bookshelfNotFoundError = (id) => {
  const err = Error("Bookshelf not found");
  err.errors = [`Bookshelf with id of ${id} could not be found.`];
  err.title = "Bookshelf not found.";
  err.status = 404;
  return err;
};

const userId = 2;

const validatebookShelf = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Bookshelf can't be empty."),

  check("name")
    .isLength({ max: 80 })
    .withMessage("Bookshelf name can't be longer than 80 characters."),
  handleValidationErrors,
];

// create the bookshelves list
router.get("/",
  asyncHandler(async (req, res) => {
    const shelves = await Shelf.findAll({
      where: {
        user_id : userId
      },
      order: [["createdAt", "DESC"]],
    });
    res.json({ shelves });
}));

// add the bookshelf to database
router.post("/",
  validatebookShelf,
  asyncHandler(async (req, res) => {
    const { name } = req.body;
    const bookshelf = await Shelf.create({ name, user_id: userId});
    // const bookshelf = await bookShelf.create({ name, user_id: req.user.id });
    res.json({ bookshelf });
  })
);

// get specific bookshelf and output the shelf and all its books
router.get("/:bookshelfid",
  asyncHandler(async (req, res, next) => {
    const bookshelf = await Shelf.findOne({
      include: [Book],
      where: {
        id: req.params.bookshelfid,
      }
    });
    if (bookshelf) {
      let allBooksOnShelf = [];
      for (let book of bookshelf.Books){
        allBooksOnShelf.push(book.title);
      }
      res.json({ bookshelf, allBooksOnShelf });
    } else {
      next(bookshelfNotFoundError(req.params.bookshelfid));
    }
  })
);

// delete bookshelf
router.delete(
  "/:bookshelfid",
  asyncHandler(async (req, res, next) => {
    const bookshelf = await Shelf.findOne({
      where: {
        id: req.params.bookshelfid,
      },
    });
    if (userId !== bookshelf.user_id) {
    // if (req.user.id !== bookshelf.user_id) {
      const err = new Error("Unauthorized");
      err.status = 401;
      err.message = "You are not authorized to delete this tweet.";
      err.title = "Unauthorized";
      throw err;
    }
    if (bookshelf) {
      await bookshelf.destroy();
      res.json({ message: `Deleted bookshelf with id of ${req.params.bookshelfid}.` });
    } else {
      next(bookshelfNotFoundError(req.params.bookshelfid));
    }
  })
);

// Get the bookshelves except the shelves that have that book
// Except the current bookshelf
router.get("/:bookshelfid/:bookid",
  asyncHandler(async (req, res) => {

    const bookId = req.params.bookid;
    const shelves = await Shelf.findAll({
      where: {
        user_id : userId,
      },
      include: {
        model: Book, where: {id: bookId}
      }
    });
    const allShelves = await Shelf.findAll();
    let includedShelf = [];
    for (let shelf of shelves) {
      includedShelf.push(shelf.id);
    };

    let allShelvesArray = [];
    for (let shelf of allShelves) {
      allShelvesArray.push(shelf);
    };

    const allShelvesWithoutBook = allShelvesArray.filter(function(shelf) {
      if (!includedShelf.includes(shelf.id)) {
        return shelf;
      }
    });

    res.json({ allShelvesWithoutBook });
}));


// Add the book to selected shelf in the database
router.post("/:bookshelfid/:bookid",
  asyncHandler(async (req, res, next) => {
    const bookId = req.params.bookid;
    const bookshelfId = req.params.bookshelfid;
    const bookshelf = await Shelf.findByPk(bookshelfId);
    const book = await Book.findByPk(bookId)
    if (bookshelf) {
      await bookshelf.addBook(book);
      res.json(bookshelf);
    } else {
      next(bookshelfNotFoundError(req.params.bookshelfId));
    };
}));



// GET request for a single book: description, author, title
router.get("/:bookshelfid/books/:bookid",
  asyncHandler(async (req, res) => {
    const bookId = req.params.bookid;
    const bookshelfId = req.params.bookshelfid;
    const book = await Book.findByPk(bookId, {
      include: { model: Shelf,
        where: {
          id: bookshelfId
        }
      },
    });
    res.json({ book });
}));

// delete book from a bookshelf and output rest of books on that shelf
router.delete("/:bookshelfid/books/:bookid",
  asyncHandler(async(req, res) => {
    const bookId = req.params.bookid;
    const bookshelfId = req.params.bookshelfid;

    const book = await Book.findByPk(bookId);
    const bookshelf = await Shelf.findByPk(bookshelfId, {
      include: Book
    });

    const updatedBooks = await Book.findAll({
      where: {
        [Op.not]: {
          id: bookId
        }
      },
      include: { model: Shelf,
        where: {
          id: bookshelfId,
        }
      },
    });

    const bookOnShelf = await Books_Shelf.findOne({
      where: {
        book_id: bookId,
        shelf_id: bookshelfId
      }
    });

    await bookOnShelf.destroy();

    res.json({ message: `Removed ${book.title} by ${book.author} from your bookshelf, ${bookshelf.name}`, updatedBooks });
  }));

module.exports = router;
