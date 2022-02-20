import React, { Component } from "react";
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    searchQuery: "",
  }

  handleSearchQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      return toast.error("Введити слово для поиска")
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "", })
  }

  render() {
    const { searchQuery } = this.state
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button" >
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleSearchQueryChange}
          />
        </form>
      </header>
    )
  }
}

export default SearchBar