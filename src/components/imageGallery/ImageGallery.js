import { Component } from "react";
import ImageItem from "components/imageGalleryItem/ImageGalleryItem";
import { BallTriangle } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "components/modal/Modal";
import apiF from "components/fetchApiPixa/FetchApi";


export default class ImageGallery extends Component {
  state = {
    searchQuery: null,
    imageList: null,
    error: null,
    status: "idle",
    showModal: false,
    url: null,
    tags: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const searchQuery = this.props.query;

    if (prevQuery !== searchQuery) {
      this.setState({ status: "pending" })
      setTimeout(() => {
        apiF.fetchApiPixa(searchQuery, 1)
          .catch(error => this.setState({ error, status: "rejected" }))
          .then(({ hits }) => this.setState({ imageList: hits, status: "resolved" }))
      }, 2000)

    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }
  handleClickImage = (url, tags) => {
    this.setState({ url, tags });
    this.toggleModal();
  }

  render() {
    const { imageList, error, status, showModal, url, tags } = this.state

    if (status === "idle") {
      return <div className="noQuery">Введите слово для поиска</div>
    }

    if (status === "pending") {
      return <BallTriangle
        color="#3f51b5"
        height={150}
        width={150}
      />
    }

    if (status === "rejected") {
      return error.message
    }

    if (status === "resolved") {
      return (
        <>
          <ul className="ImageGallery" >
            <ImageItem hits={imageList} modalOpen={this.handleClickImage} />
          </ul>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img className="imageLarge" alt={tags} src={url} />
            </Modal>
          )}
        </>
      )
    }
  }
}