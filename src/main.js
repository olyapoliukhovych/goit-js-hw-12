import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; // додатковий імпорт стилів iziToast

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
      closeOnClick: true,
      closeOnEscape: true,
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(query)
    .then(hits => {
      //   const hits = data.hits ?? [];

      if (!hits || hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          closeOnClick: true,
          closeOnEscape: true,
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message:
          'Something went wrong while fetching images. Please try again later.',
        position: 'topRight',
        closeOnClick: true,
        closeOnEscape: true,
      });
    })
    .finally(() => {
      hideLoader();
    });
}
