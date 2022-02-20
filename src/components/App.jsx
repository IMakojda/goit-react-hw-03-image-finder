import React,{Component} from "react";
import SearchBar from "./searchBar/Searchbar";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";

export default class App extends Component {
  state = {
    searchQuery:"",
    }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery })
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit }/>
        <ImageGallery query={searchQuery}/>
        <Loader/>
    </>
    )
  }
};
