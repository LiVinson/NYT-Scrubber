const db = require("../models");
const API_KEY = process.env.NYT_API_KEY;
const axios = require("axios");


module.exports = {
    queryNYT: (req, res) => {
        // console.log(req.body.data);
        // console.log(req.data);
        // console.log()

        (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${req.params.query.topic}&begin_date=${req.params.query.startYear}0101"&end_date=${req.params.query.endYear}1231&fq=document_type:(article)`)
            .then(response => console.log("response received"))
            // res.json(response))
            .catch(err => res.status(422).json(err)))

    },

    findAll: (req, res) => {
        // console.log("inside controller.findAll");
        db.Article.find()
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err))
    },

    create: (req, res) => {
        console.log("Inside create method of article Controller", req.body);
        db.Article.create({
                headline: req.body.headline,
                byline: req.body.byline,
                pub_date: req.body.pub_date,
                url: req.body.url,
                snippet: req.body.snippet,
                nyt_id: req.body.nyt_id
            })
            .then(response => res.json(response))
            .catch(err =>
                res.status(422).json(err))
    },

    delete: (req, res) => {
        // console.log("Inside delete method of article Controller", req.params.id);
        db.Article.remove({
                _id: req.params.id
            })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err))
    }

}