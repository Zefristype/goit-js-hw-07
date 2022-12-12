import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

gallery.addEventListener("click", onImgClick);

function onImgClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
  event.preventDefault();
  const url = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${url}">`);
  instance.show();
}

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
