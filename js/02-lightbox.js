import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function makeGalleryMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

console.log(galleryItems);
