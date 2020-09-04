const express = require("express");
const router = express.Router();

const db = require("../db/models");

const { requireAuth } = require("../auth");

const { check } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../utils");

const { Task } = db;

router.use(requireAuth);

const validateTask = [
  //  Task name cannot be empty:
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Task name can't be empty."),
  //  Task name cannot be longer than 255 characters:
  check("name")
    .isLength({ max: 255 })
    .withMessage("Task name can't be longer than 255 characters."),
];


const taskNotFoundError = (id) => {
  const err = Error(`Task with id of ${id} could not be found.`);
  err.title = "Task not found.";
  err.status = 404;
  return err;
};


router.get("/", asyncHandler(async (req, res) => {
  const tasks = await Task.findAll();
  res.json({ tasks });
}));

router.post(
  "/",
  validateTask,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { name } = req.body;
    const task = await Task.create({ name });
    res.status(201).json({ task });
  })
);


router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const taskId = parseInt(req.params.id, 10);
    const task = await Task.findByPk(taskId);
    if (task) {
      res.json({ task });
    } else {
      next(taskNotFoundError(taskId));
    }
  })
);


router.put(
  "/:id(\\d+)",
  validateTask,
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const taskId = parseInt(req.params.id, 10);
    const task = await Task.findByPk(taskId);

    if (task) {
      await task.update({ name: req.body.name });
      res.json({ task });
    } else {
      next(taskNotFoundError(taskId));
    }
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const taskId = parseInt(req.params.id, 10);
    const task = await Task.findByPk(taskId);

    if (task) {
      await task.destroy();
      res.status(204).end();
    } else {
      next(taskNotFoundError(taskId));
    }
  })
);



module.exports = router;
