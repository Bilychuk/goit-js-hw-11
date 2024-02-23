import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import errorIcon from "./img/x-octagon.svg";

// import css from "file.css";

const searchForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

searchForm.addEventListener("submit", fetchImages);

function fetchImages(event) {
    event.preventDefault();
    const input = searchForm.elements.word.value.trim();
    if (input === "") {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty',
        });
        return;
    }
    
    const KEY = '42515164-6d66b652ac661a4b366139ff0';
    const BASE_URI = 'https://pixabay.com/api/';
    const Q = input;
    const IMAGE_TYPE = 'photo';
    const ORIENTATION = 'horizontal';
    const SAFESEARCH = true;
    const LINK = `${BASE_URI}?key=${KEY}&q=${Q}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;
    
    
    fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('Image error');
            }
            return response.json();
        })
        .then(data => {
            const images = data.hits;
            console.log(images)
            if (images.length === 0) {
                gallery.innerHTML = "";
                searchForm.reset();
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
                function createGalleryMarkup(images) {
                    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
                        `<li class="gallery-item">
                            <a class="gallery-link" href="${largeImageURL}">
                            <img
                            class="gallery-image"
                            src="${webformatURL}"
                            data-source="${largeImageURL}"
                            alt="${tags}"
                            />
                            </a>
                            <div class="image-info">
                                <ul class="image-info-list">
                                    <li class="image-item">
                                        <h2 class="image-text">Likes</h2>
                                        <p class="image-quantity">${likes}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Views</h2>
                                        <p class="image-quantity">${views}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Comments</h2>
                                        <p class="image-quantity">${comments}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Downloads</h2>
                                        <p class="image-quantity">${downloads}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`)
                        .join("");
                    }

                gallery.innerHTML = createGalleryMarkup(images);

                gallery.addEventListener('click', selectImage);

                function selectImage(event) {
                    event.preventDefault();
                    const { className, dataset, alt } = event.target;
                    if (className !== "gallery-image") {
                        return;
                    }
                    const imageLightbox = new SimpleLightbox('.gallery a', {
                        captionsData: 'alt',
                    });

                    imageLightbox.refresh();     
                }
            }
            searchForm.reset();
        })
    .catch(error => {
        alert('Error while fetching images from Pixabay!');
    })   
};



