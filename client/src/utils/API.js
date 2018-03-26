import axios from "axios";

export default {
    getArticles: (data) => {
        const { topic, startYear, endYear } = data;
        console.log(topic, startYear, endYear);
        return (axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + [topic] + "&begin_date=" + [startYear] + "0101" + "&end_date=" + [endYear] + "0101" + "&fq=document_type:(article)"));
    },

    saveArticle: (data) => {
        // console.log("title inside API Save Article", article.headline);
        // console.log("btnId");
        // console.log("Inside saveArticle function:", data);
        const articleData = {
            headline: data.headline.main,
            byline: data.byline.original,
            pub_date: data.pub_date,
            snippet: data.snippet,
            url: data.web_url
        };
        console.log(articleData.headline);
// console.log("publishing date:", articleData.pub_date);
// console.log(typeof articleData.pub_date);
        return (axios.post("/api/article", articleData));
        //Add functionality - post request using axios to the routes, routes to controller file. Create a new instance of Article schema, save to mongo DB, return the saved object, pass back in a promise in Home, update state (last Saved),
        //Update panel 3 to do a get request for articles saved in the db and display

    },

    getSavedArticles: () => {
        console.log("Inside API.getSavedArticles");
        return (axios.get("/api/articles"));

    },
    
    deleteArticle: (data) => {
        console.log(data);
        return (axios.delete(`api/article/${data._id}`));
    },


}