
	const path = require("path");
	const router = require('express').Router();
	const articleController = require("../controllers/articleController")
	//require controller and save in variable to access methods



	//Get Route - > function to get all articles from the Articles collection (happens on page load, adding or deleting article)

	router.get("/articles", articleController.findAll);

	//Post Route - > function to add an article to the Articles Collection
	router.post("/article", articleController.create);

	//Delete Article -> function to remove an article from the Article Collection
	router.delete("/article/:id", articleController.delete)


module.exports = router;
