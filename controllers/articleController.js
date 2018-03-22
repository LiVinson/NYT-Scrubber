const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Article.find()




    },

    create: (req, res) => {
        console.log("Inside create method of article Controller");
        db.Article.create(req.body)
        .then(response => req.json(response))
        .catch(err => res.status(422).json(err))
    }

}