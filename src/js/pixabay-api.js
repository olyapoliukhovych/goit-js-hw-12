import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53389241-61d9b890c2cc3baebfd2ae29c';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    editors_choice: true,
    per_page: 15,
    page: 1,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data.hits);
}
