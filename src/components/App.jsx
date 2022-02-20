import React,{Component} from "react";
import SearchBar from "./searchBar/Searchbar";
import Modal from "./modal/Modal";


export default class App extends Component {
  state = {
    imageList: [],
    searchQuery:"",
    showModal:false,
  }
  toggleModal = () => {
    this.setState(({showModal}) => ({
    showModal:!showModal,
  }))
}

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>open modal</button>
    <SearchBar />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
          />
        )}    
    
    </>
    )
  }
};
