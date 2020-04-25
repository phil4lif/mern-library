import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import API from '../../utils/API'


export class Search extends Component {
    state = {
        search: "",
        results: []
    };
    
    searchBooks = query => {
        API.search(query)
        .then(res => {
            console.log(res.data)
            this.setState({ results: res.data.items})
        })
        .catch(err => console.log(err))
    }
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search)
    }
    saveBook = result => {
        const newbook = {
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors.join(","),
            synopsis: result.volumeInfo.description,
            link: result.volumeInfo.infoLink,
            image: result.volumeInfo.imageLinks.thumbnail
        }
        console.log("static text", newbook)
        API.saveBook(newbook)
        .then(res => {
            console.log("success")
        })
    }
    render() {
        return (
            <div>
                <SearchForm 
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}/>
                <SearchResults query={this.state.search} results={this.state.results} saveBook={this.saveBook}/>
            </div>
        )
    }
}

export default Search

