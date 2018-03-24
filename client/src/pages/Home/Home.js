import React, { Component } from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import SearchForm from "../../components/SearchForm";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import ListDiv from "../../components/ListDiv";
import Button from "../../components/Button";
import API from "../../utils/API";
// import Footer from "../../components/Footer";

class Home extends Component {

    //state resides in parent component, and will be passed down to children components as needed
    state = {
        topic: "",
        startYear: 2018,
        endYear: 2018,
        results: [],
        error: "",
        lastSaved: "",
        savedArticles: []
    };

    //When the component moutns (in this case when the page is loaded), will make a call to NYT API using methods in utils> API to get starter articles
    componentDidMount() {
        this.getSaved();

    };

    getSaved = () => {
        console.log("getSaved method")
        API.getSavedArticles().then(response => {
            console.log("response to getSavedArticles: ", response.data);
            this.setState({
                savedArticles: response.data
            });
        })
    };

    //Called when user updates any of 3 form inputs
    handleInputChange = event => {
        console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };


    //Called when user clicks submit button in form
    handleFormSubmit = event => {
        event.preventDefault();
        //Call method on API that will pass in state as parameter to be used to interact with API

        API.getArticles(this.state).then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            };
            // console.log(res.data.response.docs);

            this.setState({ results: res.data.response.docs, error: "" });
        }).catch(err => this.setState({ error: err.message }))
    };

    handleArticleSave = event => {
        event.preventDefault();
        // console.log(event.target.id);
        const clickedArticle = this.state.results.filter(element => element.id = event.target.id)[0]; //SAve the article from the results array with the ID matching the button clicked

        API.saveArticle(clickedArticle).then(res => {
            // console.log("Home response:", res);
            this.getSaved()
        })
    };


    handleArticleDelete = (event) => {
        event.preventDefault();
        console.log("delete Saved method, button_id:", event.target.id);
        const clickedArticle = this.state.savedArticles.filter(element => element._id = event.target.id)[0]; //SAve the article from the savedArticle array with the ID matching the button clicked
        API.deleteArticle(clickedArticle).then(response => {
            console.log("response to delete Saved Article: ", response);
            this.getSaved();
        })
    };

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h1>New York Times Article Scraper</h1>
                        <h3>Search for NYT articles using a keyword and save the top results</h3>
                    </Jumbotron>
                    <Panel heading="Search">
                        < SearchForm
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Panel>
                    <Panel heading="Results">
                        {this.state.results.length ? (
                            <List>
                                {this.state.results.map(result => ( //For each article in the result array, create a list item with a div w/ article info, and a save button with article ID
                                    <ListItem key={result._id}>
                                        <ListDiv headline={result.headline.main} byline={result.byline.original} pub_date={result.pub_date} snippet={result.snippet} url={result.web_url} />
                                        <Button id={result._id} onClick={this.handleArticleSave}>
                                            Save Article
                                        </ Button>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (<h2> Search for an Article Above and View Results Here</h2>)
                        }

                    </Panel>
                    <Panel heading="Saved Articles">
                        {this.state.savedArticles.length ? (
                            <List>
                                {this.state.savedArticles.map(article => ( //For each article in the savedResult array, create a list item with a div w/ article info, and a delete button with article ID
                                    <ListItem key={article._id}>
                                        <ListDiv headline={article.headline} byline={article.author} pub_date={article.publishDate} snippet={article.snippet} url={article.url} />
                                        <Button id={article._id} onClick={this.handleArticleDelete}>
                                            Delete Article
                                    </ Button>
                                    </ListItem>
                                ))}
                            </List>
                        ) : ("No Articles Currently Saved...")}
                    </Panel>
                </Container>
            </div>
        )
    }
}

export default Home;