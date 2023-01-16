import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// створити галерею за допомогою додавання елементів, ІННерштмл

const allGallery = document.querySelector('.gallery');

const creatingOfGallery = galleryItems.map(element=>
    `<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      loading = "lazy"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
  </div>
    `).join("");
    allGallery.insertAdjacentHTML('beforeend', creatingOfGallery);
// делегування події
allGallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    }
    console.log(event.target.textContent);
    const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg" width="800" height="600">
`);

instance.show();
}
/* <img src="assets/images/image.png" width="800" height="600"></img> */