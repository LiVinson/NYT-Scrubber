const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Update with correct info, add validation
const Article = new Schema({
    nyt_id: {
        type: String,
        required: true,
        unique: true,
    },
    headline: {
        type: String,
        required: true,
    },
    byline: {
        type: String,
        required: true
    },
    pub_date: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        default: "No snippet available"
    },
    url: {
        type: String,
        required: true
    }
});

Article.methods.addColon = () => {
    //Takes in this.author

    //Inserts ":" after "By"

   //Updates this.author to new value.

};



module.exports = mongoose.model("Article", Article);