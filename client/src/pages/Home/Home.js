import React, { Component } from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import SearchForm from "../../components/SearchForm";
// import Footer from "../../components/Footer";

class Home extends Component {

    //state resides in parent component, and will be passed down to children components as needed
    state = {
        topic: "",
        startYear: 2018,
        endYear: 2018,
        results = []
    };

    //When the component moutns (in this case when the page is loaded), will make a call to NYT API using methods in utils> API to get starter articles
    // componentDidMount() {


    // }

    //Called when user updates any of 3 form inputs
    handleInputChange = event => {
        console.log(event.target.value);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })


    };


    //Called when user clicks submit
    handleFormSubmit = event => {
        event.preventDefault();
        //Call method on API that will pass in the parameters from state and be used to interact with API
    };

    

    render ()    {
    return (
        <div>
        <Container>
            <Jumbotron>
                <h1>New York Times Article Scraper</h1>
                <h3>Search for NYT articles using a keyword and save the top results</h3>
            </Jumbotron>
            <Panel heading="Search"> 
                < SearchForm
                     handleInputChange = {this.handleInputChange}
                /> 

            </Panel>
            <Panel heading="Results"> <form></form> </Panel>
            <Panel heading="Saved Articles"> <form></form> </Panel>
        </Container>
        </div>
        )
    }
}

export default Home;