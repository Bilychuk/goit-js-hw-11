import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="/goit-js-hw-11/assets/x-octagon-4f06a8ee.svg";function g(o){const a=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(a).then(n=>{if(!n.ok)throw new Error("Image error");return n.json()}).catch(n=>{c.error({message:"Error while fetching images from Pixabay!",title:"Error",titleColor:"#fff",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"})}).finally(()=>{f.reset()})}function d(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:a,downloads:n})=>`<li class="gallery-item">
                            <a class="gallery-link" href="${i}">
                            <img
                            class="gallery-image"
                            src="${r}"
                            data-source="${i}"
                            alt="${s}"
                            />
                            </a>
                            <div class="image-info">
                                <ul class="image-info-list">
                                    <li class="image-item">
                                        <h2 class="image-text">Likes</h2>
                                        <p class="image-quantity">${e}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Views</h2>
                                        <p class="image-quantity">${t}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Comments</h2>
                                        <p class="image-quantity">${a}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Downloads</h2>
                                        <p class="image-quantity">${n}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("")}const f=document.querySelector(".form"),l=document.querySelector(".gallery"),h=document.querySelector("span");f.addEventListener("submit",p);function p(o){o.preventDefault();const r=f.elements.word.value.trim();if(r===""){c.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"});return}g(r).then(i=>{const s=i.hits;if(s.length===0)return l.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"});{let e=function(t){t.preventDefault();const{className:a}=t.target;if(a!=="gallery-image")return;new u(".gallery .gallery-link",{captionsData:"alt"}).refresh()};l.innerHTML=d(s),l.addEventListener("click",e)}})}l.addEventListener("load",y);function y(){return h.classList.add("loader")}
//# sourceMappingURL=commonHelpers.js.map
