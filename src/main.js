import { fetchImages } from './js/pixabay-api'
import { createGalleryMarkup } from './js/render-functions';
import errorIcon from "./img/x-octagon.svg";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const searchForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const imageLightbox = new SimpleLightbox('.gallery .gallery-link', {
                    captionsData: 'alt',
                    }); 

searchForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    loader.classList.remove("is-hidden");
    const input = searchForm.elements.word.value.trim();
    
    fetchImages(input).then(data => {
        const images = data.hits;
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
            searchForm.reset()
            return;
        } else if (images.length === 0) {  
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: '#fafafb',
                messageSize: '16px',
                backgroundColor: '#ef4040',
                theme: 'dark',
                iconUrl: errorIcon,
                maxWidth: '432px',
            })
            searchForm.reset()
            return;
            
        } else {
            gallery.innerHTML = createGalleryMarkup(images);
            imageLightbox.refresh();
            gallery.addEventListener('click', selectImage);
            function selectImage(event) {
                event.preventDefault();
                const { className } = event.target;
                if (className !== "gallery-image") {
                    return;
                }
            }  
        }
        searchForm.reset();
    }).catch(error => {
        iziToast.error({
            title: 'Error',
            titleColor: '#fff',
            message: 'Error while fetching images from Pixabay!',
            messageColor: '#fafafb',
            messageSize: '16px',
            backgroundColor: '#ef4040',
            theme: 'dark',
            iconUrl: errorIcon,
            maxWidth: '432px',
        })   
    }).finally(() => {
        loader.classList.add("is-hidden");
    })
} 