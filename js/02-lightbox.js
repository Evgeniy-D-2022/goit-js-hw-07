import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemImage = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
<a class="gallery__link" href= "${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  /></a></li>`
}).join('');

itemImage.insertAdjacentHTML('beforeend', markupGallery);

itemImage.addEventListener('click', onModal);

function onModal(evt) {
    evt.preventDefault();

    const currentImage = evt.target;

    if (currentImage.className !== 'gallery__image') {
        return;
    }
    let lightbox = new SimpleLightbox(`.gallery .gallery__link`, {
        captionsData: "alt",
        cationDelay: '250',
    });
    // let instance = basicLightbox.create(`<img class="gallery__image"
    // src="${currentImage.dataset.source}"/>`)

    lightbox.open();

    // console.dir(currentImage.nodeName);
}

console.log(galleryItems);
