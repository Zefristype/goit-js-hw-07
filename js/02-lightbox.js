import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function makeGalleryMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;}).join("");
}

console.log(galleryItems);
