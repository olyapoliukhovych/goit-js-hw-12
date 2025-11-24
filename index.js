import{a as m,S as f,i as a}from"./assets/vendor-Dj0z4On-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="53389241-61d9b890c2cc3baebfd2ae29c";function h(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,editors_choice:!0,per_page:15,page:1};return m.get(g,{params:o}).then(r=>r.data.hits)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250,fadeSpeed:200});function L(i){if(!i||i.length===0)return;const o=i.map(r=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:s,views:u,comments:d,downloads:p}=r;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-img" src="${n}" alt="${t}" loading="lazy"/>
        </a>
        <div class="details">
          <p class="details-item"><b>Likes</b> ${s}</p>
          <p class="details-item"><b>Views</b> ${u}</p>
          <p class="details-item"><b>Comments</b> ${d}</p>
          <p class="details-item"><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `}).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){c.innerHTML=""}function O(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const E=document.querySelector(".form"),q=document.querySelector("input");E.addEventListener("submit",v);function v(i){i.preventDefault();const o=q.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight",closeOnClick:!0,closeOnEscape:!0});return}w(),O(),h(o).then(r=>{if(!r||r.length===0){a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnClick:!0,closeOnEscape:!0});return}L(r)}).catch(r=>{console.error("Error fetching images:",r),a.error({title:"Error",message:"Something went wrong while fetching images. Please try again later.",position:"topRight",closeOnClick:!0,closeOnEscape:!0})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
