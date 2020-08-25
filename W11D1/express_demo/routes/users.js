const express = require("express");

// create router instance
const router = express.Router();



router.get("/", (req, res) => {
	let users = [
    { id: 1, name: "Alissa" },
    { id: 2, name: "Tom" },
    { id: 3, name: "Julie" },
    { id: 3, name: "Angela" },
    { id: 3, name: "Corina" },
  ];
  res.render("resource_layout", { resources: users, resource: "users" });
});


router.get("/:id(\\d+)", (req, res) => {
	let userId = req.params.id;

  res.send(`User ${userId} Information`);
});


router.get("/:id(\\d+)/profile", (req, res) => {
	let userId = req.params.id;

  res.send(`User ${userId} Profile`);
});



// export router to expose code to other modules
module.exports = router;
