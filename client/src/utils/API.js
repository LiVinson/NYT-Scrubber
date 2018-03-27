import axios from "axios";
 

export default {

    getArticles: (userquery) => {    
        const { topic, startYear, endYear } = userquery;
        // console.log(topic, startYear, endYear);
        // console.log(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101"&end_date=${endYear}1231&fq=document_type:(article)`)
        // return (axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${topic}&begin_date=${startYear}0101"&end_date=${endYear}1231&fq=document_type:(article)`));
    
       return axios.get('api/NYTarticles', {
            data: {
              topic, 
              startYear,
              endYear 
            }
          })   
    
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
            url: data.web_url,
            nyt_id: data._id
        };
        console.log(articleData.nyt_id);

        return (axios.post("/api/article", articleData));
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