
	const path = require("path");
	const router = require('express').Router();
	const articleController = require("../controllers/articleController")
	//require controller and save in variable to access methods inside routes


	//add any API routes here

	//Get Route - > function to get all articles from the Articles collection

	router.route("/articles").get(articleController.findAll);
	//Post Route - > function to add an article to the Articles Collection
	router.post("/article", articleController.create);

	//Delete Article -> function to remove an article from the Article Collection



module.exports = router;
