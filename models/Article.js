const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Update with correct info, add validation
const Article = new Schema({
    headline: String,
    publishDate: String,
    author: String,
    url: String
});

module.exports = mongoose.model("Article", Article);