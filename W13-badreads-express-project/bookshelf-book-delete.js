import { populateBookshelfBookList } from './get-bookshelf-books.js';
import {populateUserBookshelfList} from './get-bookshelf-list.js';

const bookDelete = (bookId, shelfId) => {
  return async () => {
    try {
      const res = await fetch(`/api-bookshelves/${shelfId}/books/${bookId}`, {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem(
        //     "TWITTER_LITE_ACCESS_TOKEN"
        //   )}`,
        //},
      });
      if (!res.ok) {
        throw res;
      }
      populateBookshelfBookList(shelfId);
    } catch (err) {
      console.error(err);
    }
  };
};


const shelfDelete = (shelfId) => {
  return async () => {
    try {
      const res = await fetch(`/api-bookshelves/${shelfId}`, {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem(
        //     "TWITTER_LITE_ACCESS_TOKEN"
        //   )}`,
        //},
      });
      if (!res.ok) {
        throw res;
      }
      populateUserBookshelfList();
    } catch (err) {
      console.error(err);
    }
  };
};


document.addEventListener("DOMContentLoaded", async () => {
  //const userId = localStorage.getItem("TWITTER_LITE_CURRENT_USER_ID");
  const shelfId = 2;
  try {
    const deleteBookButton = document.querySelectorAll(".delete-book-button");
    const deleteShelfButton = document.querySelectorAll(".delete-shelf-button");
    if (deleteBookButton) {
      deleteBookButton.addEventListener("click",
        bookDelete(deleteBookButton.id),

      )
    };
    if (deleteShelfButton) {
      deleteShelfButton.addEventListener("click",
        shelfDelete(deleteShelfButton.id),

      )
    };
  } catch (err) {
    console.error(err);
  }
});
