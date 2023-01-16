import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const allGallery = document.querySelector('.gallery');

const creatingOfGallery = galleryItems.map(element=>
    `<a class="gallery__item" href="${element.original}">
    <img class="gallery__image" src="${element.preview}" loading = "lazy" alt=${element.description}" />
  </a>
    `).join("");
    allGallery.insertAdjacentHTML('beforeend', creatingOfGallery);

    allGallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    };
    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250
        });
}