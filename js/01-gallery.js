import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// створити галерею за допомогою додавання елементів, можливе ІННерштмл
{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="small-image.jpg"
    data-source="large-image.jpg"
    alt="Image description"
  />
</a>
</div> */}
const allGallery = document.querySelector('.gallery');

const creatingOfGallery = galleryItems.map(element=>
    `<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
  </div>
    `).join("");
    allGallery.insertAdjacentHTML('beforeend', creatingOfGallery);
// делегування події
// allGallery.addEventListener("click", onClick);

// function onClick(event) {
//     if(event.target.nodeName !== 'IMG'){
//         return
//     }
//     console.log(event.target.textContent);
// }