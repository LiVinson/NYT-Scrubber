const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Article.find()




    },

    create: (req, res) => {
        console.log("Inside create method of article Controller", req.body);
        db.Article.create({headline: req.body.headline, publishDate: req.body.pub_date, url: req.body.url, author: req.body.byline})
        .then(response => console.log(response))
        .catch(err => res.status(422).json(err))
    }

}