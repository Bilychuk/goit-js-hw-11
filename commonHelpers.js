import{i as p,S as I}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();const L="/goit-js-hw-11/assets/x-octagon-4f06a8ee.svg",o=document.querySelector(".form"),g=document.querySelector(".gallery");o.addEventListener("submit",A);function A(u){u.preventDefault();const r=o.elements.word.value.trim();if(r===""){p.error({title:"Error",message:"Search query cannot be empty"});return}const y=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${r}&image_type=photo&orientation=horizontal&safesearch=${!0}`;fetch(y).then(s=>{if(!s.ok)throw new Error("Image error");return s.json()}).then(s=>{const l=s.hits;if(console.log(l),l.length===0)return g.innerHTML="",o.reset(),p.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:L,maxWidth:"432px"});{let E=function(i){return i.map(({webformatURL:c,largeImageURL:m,tags:h,likes:d,views:S,comments:$,downloads:x})=>`<li class="gallery-item">
                            <a class="gallery-link" href="${m}">
                            <img
                            class="gallery-image"
                            src="${c}"
                            data-source="${m}"
                            alt="${h}"
                            />
                            </a>
                            <div class="image-info">
                                <ul class="image-info-list">
                                    <li class="image-item">
                                        <h2 class="image-text">Likes</h2>
                                        <p class="image-quantity">${d}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Views</h2>
                                        <p class="image-quantity">${S}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Comments</h2>
                                        <p class="image-quantity">${$}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Downloads</h2>
                                        <p class="image-quantity">${x}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("")},b=function(i){i.preventDefault();const{className:c,dataset:m,alt:h}=i.target;if(c!=="gallery-image")return;new I(".gallery a",{captionsData:"alt"}).refresh()};g.innerHTML=E(l),g.addEventListener("click",b)}o.reset()}).catch(s=>{alert("Error while fetching images from Pixabay!")})}
//# sourceMappingURL=commonHelpers.js.map
