import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const KEY = '42515164-6d66b652ac661a4b366139ff0';
const BASE_URI = 'https://pixabay.com/api/';
const Q = input.value;
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;
const LINK = `${BASE_URI}?key=${KEY}&q=${Q}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

function fetchImages() {
    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('Image error');
            }
            return response.json();
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        })
    
}