import { searchForm } from '../main';
import errorIcon from "../img/x-octagon.svg";

export function fetchImages(Q) {
    const KEY = '42515164-6d66b652ac661a4b366139ff0';
    const BASE_URI = 'https://pixabay.com/api/';
    const IMAGE_TYPE = 'photo';
    const ORIENTATION = 'horizontal';
    const SAFESEARCH = true;
    const LINK = `${BASE_URI}?key=${KEY}&q=${Q}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;

    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('Image error');
            }
            return response.json();
        })
};