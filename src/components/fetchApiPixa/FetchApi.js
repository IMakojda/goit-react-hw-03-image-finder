function fetchApiPixa(query, page) {
  return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=25794310-c578201845b488d219bb56389&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`No image by keyword ${query}`))
    })
}

const api = {
  fetchApiPixa
}
export default api;