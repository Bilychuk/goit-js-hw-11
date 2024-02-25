import{S as g,i as c}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(o){const s=`https://pixabay.com/api/?key=42515164-6d66b652ac661a4b366139ff0&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(s).then(n=>{if(!n.ok)throw new Error("Image error");return n.json()})}function h(o){return o.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:s,downloads:n})=>`<li class="gallery-item">
                            <a class="gallery-link" href="${a}">
                            <img
                            class="gallery-image"
                            src="${r}"
                            data-source="${a}"
                            alt="${i}"
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
                                        <p class="image-quantity">${s}</p>
                                    </li>
                                    <li class="image-item">
                                        <h2 class="image-text">Downloads</h2>
                                        <p class="image-quantity">${n}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("")}const m="/goit-js-hw-11/assets/x-octagon-4f06a8ee.svg",l=document.querySelector(".form"),f=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=new g(".gallery .gallery-link",{captionsData:"alt"});l.addEventListener("submit",y);function y(o){o.preventDefault(),f.innerHTML="",u.classList.remove("is-hidden");const r=l.elements.word.value.trim();d(r).then(a=>{const i=a.hits;if(r===""){c.error({title:"Error",titleColor:"#fff",message:"Search query cannot be empty",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"}),l.reset();return}else if(i.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"}),l.reset();return}else{let e=function(t){t.preventDefault();const{className:s}=t.target};f.innerHTML=h(i),p.refresh(),f.addEventListener("click",e)}l.reset()}).catch(a=>{c.error({title:"Error",titleColor:"#fff",message:"Error while fetching images from Pixabay!",messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#ef4040",theme:"dark",iconUrl:m,maxWidth:"432px"})}).finally(()=>{u.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
