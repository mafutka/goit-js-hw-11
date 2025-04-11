import{a as d,S as p,i as a}from"./assets/vendor-DEZpR2tN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="49679717-f5eb164bef18f43bdb971e28c";function h(t){return d("https://pixabay.com/api/",{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");let o=null;function g(t){const s=t.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${s}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${t.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${t.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${t.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${t.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function y(t){const s=t.map(g).join("");u.insertAdjacentHTML("beforeend",s),o?o.refresh():o=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){u.innerHTML="",o&&(o.destroy(),o=null)}function b(){f.classList.remove("hidden")}function L(){f.classList.add("hidden")}const w=document.querySelector(".form"),l=document.querySelector(".input");w.addEventListener("submit",S);function S(t){t.preventDefault();const s=l.value.trim();if(!s){a.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),l.focus();return}b(),v(),h(s).then(i=>i.data).then(i=>{if(!i.hits||i.hits.length===0){a.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}y(i.hits)}).catch(i=>{a.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",i)}).finally(()=>{L(),l.value=""})}
//# sourceMappingURL=index.js.map
