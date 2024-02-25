export function createGalleryMarkup(images) {
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