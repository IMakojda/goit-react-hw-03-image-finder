import React, { Component } from "react";
import SearchForm from "components/form/SearchForm";

class SearchBar extends Component {
  state = {
    image: [],
    searchQuery: "",
  }

  render() {
    return (
      <header className="searchbar">
        <SearchForm />
      </header>
    )
  }
}

export default SearchBar