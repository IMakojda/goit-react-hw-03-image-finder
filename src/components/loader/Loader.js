import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loader = () => {
  return (
    <ToastContainer
      autoClose={3000}
    />
  )
}

export default Loader;