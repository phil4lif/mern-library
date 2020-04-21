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
        console.log(query)
        API.search(query)
        .then(res => {
            this.setState({ results: res.data.items})
        console.log(res)})
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
    render() {
        return (
            <div>
                <SearchForm 
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}/>
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}

export default Search
