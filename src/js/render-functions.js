// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const mainGallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  fadeSpeed: 200,
});

export function createGallery(images) {
  if (!images || images.length === 0) return;

  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;

      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" loading="lazy"/>
        </a>
        <div class="details">
          <p class="details-item"><b>Likes</b> ${likes}</p>
          <p class="details-item"><b>Views</b> ${views}</p>
          <p class="details-item"><b>Comments</b> ${comments}</p>
          <p class="details-item"><b>Downloads</b> ${downloads}</p>
        </div>
      </li>
    `;
    })
    .join('');

  mainGallery.insertAdjacentHTML('beforeend', markup);

  simpleLightbox.refresh();
}

export function clearGallery() {
  mainGallery.innerHTML = '';
}

export function showLoader() {
  // if (!loaderEl) return;
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  // if (!loaderEl) return;
  loaderEl.classList.add('hidden');
}
