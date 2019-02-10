
	const path = require("path");
	const router = require('express').Router();


//require and use api routes
	router.use("/api", require("./apiRoutes.js"));

	

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	module.exports = router;
