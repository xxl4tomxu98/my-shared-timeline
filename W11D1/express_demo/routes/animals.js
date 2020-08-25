const express = require("express");

// create router instance
const router = express.Router();


router.get("/", (req, res) => {
  console.log(`reg.path: ${req.path}`);
  console.log(`reg.baseUrl: ${req.baseUrl}`);

	let resource;
	
	if (req.baseUrl === '/cats') {
		resource = 'cats';
	} else {
		resource = 'dogs';
	}

  let toysHref = `/${resource}/toys`;
  let foodHref = `/${resource}/food`;

  res.render("animal_layout", { toysHref, foodHref, resource });
});




router.get("/toys", (req, res) => {
	let resource = req.baseUrl === '/cats' ? 'cats' : 'dogs';

  res.send(`Toys for your ${resource}`);
});




router.get("/food", (req, res) => {
  let resource = req.baseUrl === '/cats' ? 'cats' : 'dogs';

  res.send(`Food for your ${resource}`);
});



// export router to expose code to other modules
module.exports = router;
