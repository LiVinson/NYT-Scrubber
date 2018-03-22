import axios from "axios";

export default {
    getArticles: (props) => {
        const { topic, startYear, endYear } = props;
        console.log(topic, startYear, endYear);
        return (axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + [topic] + "&begin_date=" + [startYear] + "0101" + "&end_date=" + [endYear] + "0101")
        )
    },

    saveArticles: (props) => {
        const btnId = props.id;
console.log("btnId");

    }
}