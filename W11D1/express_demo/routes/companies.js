const express = require("express");

// create router instance
const router = express.Router();



router.get("/", (req, res) => {
	let companies = [
		{ id: 1, name: 'Google' },
		{ id: 2, name: 'Facebook' },
		{ id: 3, name: 'Apple' }
	]
  res.render("resource_layout", { resources: companies, resource: 'companies'});
});


router.get("/:id(\\d+)", (req, res) => {
  let companyId = req.params.id;

  res.send(`Company ${companyId} Information`);
});

// export router to expose code to other modules
module.exports = router;
