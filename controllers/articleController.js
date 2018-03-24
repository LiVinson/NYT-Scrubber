const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        // console.log("inside controller.findAll");
        db.Article.find()
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    },

    create: (req, res) => {
        // console.log("Inside create method of article Controller", req.body);
        db.Article.create({headline: req.body.headline, publishDate: req.body.pub_date, url: req.body.url, author: req.body.byline, snippet: req.body.snippet})
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    },

    delete: (req, res) => {
        // console.log("Inside delete method of article Controller", req.params.id);
        db.Article.remove({ _id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    }

}