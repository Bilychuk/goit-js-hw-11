import { fetchImages } from './js/pixabay-api'
import { createGalleryMarkup } from './js/render-functions';
import errorIcon from "./img/x-octagon.svg";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export const searchForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loaderSpan = document.querySelector("span");


searchForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const input = searchForm.elements.word.value.trim();
    if (input === "") {
        iziToast.error({
            title: 'Error',
            titleColor: '#fff',
            message: 'Search query cannot be empty',
            messageColor: '#fafafb',
            messageSize: '16px',
            backgroundColor: '#ef4040',
            theme: 'dark',
            iconUrl: errorIcon,
            maxWidth: '432px',
        });
        return;
    }

    fetchImages(input).then(data => {
        const images = data.hits;
        
        if (images.length === 0) {
            gallery.innerHTML = "";
            return iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#fafafb',
                    messageSize: '16px',
                    backgroundColor: '#ef4040',
                    theme: 'dark',
                    iconUrl: errorIcon,
                    maxWidth: '432px',
                });
        } else {
            gallery.innerHTML = createGalleryMarkup(images);
            gallery.addEventListener('click', selectImage);

            function selectImage(event) {
                event.preventDefault();
                const { className } = event.target;
                if (className !== "gallery-image") {
                    return;
                }
                const imageLightbox = new SimpleLightbox('.gallery .gallery-link', {
                    captionsData: 'alt',
                }); 
                imageLightbox.refresh();
            }              
            }
    })
} 
gallery.addEventListener("load", addLoader);
function addLoader() {
  return loaderSpan.classList.add("loader");
}



