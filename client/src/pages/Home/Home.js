import React, { Component } from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import SearchForm from "../../components/SearchForm";
// import Footer from "../../components/Footer";

class Home extends Component {

    //state resides in parent component, and will be passed down to children components as needed
    state = {
        search: ""
    };

    //When the component moutns (in this case when the page is loaded), will make a call to NYT API using methods in utils> API to get starter articles
    // componentDidMount() {


    // }





    

    render ()    {
               
        return (
        <div>
            <Container>
                <Jumbotron>
                    <h1>New York Times Article Scraper</h1>
                    <h3>Search for NYT articles using a keyword and save the top results</h3>
                </Jumbotron>
                <Panel heading="Search"> {< SearchForm />} </Panel>
                <Panel heading="Results"> <form></form> </Panel>
                <Panel heading="Saved Articles"> <form></form> </Panel>
            </Container>
        </div>
        )
    }
}

export default Home;