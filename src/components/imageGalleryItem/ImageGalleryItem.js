import React from "react";

const ImageItem = ({ hits, modalOpen }) => {

  return (
    hits.map(({ id, largeImageURL, webformatURL, tags }) => (
      <li className="ImageGalleryItem" key={id} >
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" onClick={() => modalOpen(largeImageURL)} />
      </li>)
    )
  )
}

export default ImageItem;