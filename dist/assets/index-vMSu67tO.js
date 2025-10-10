(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const u="http://api.weatherapi.com/v1",p="4d3dc4d28cd947078a9141327251705",h="favorite-cities";async function m(t,i=3){const a=await(await fetch(`${u}/forecast.json?key=${p}&q=id:${t}&lang=de&days=${i}`)).json();return console.log(a),a}async function E(t){return await(await fetch(`${u}/search.json?key=${p}&q=${t}&lang=de`)).json()}function l(){return JSON.parse(localStorage.getItem(h))||[]}function b(t){const i=l();if(i.find(n=>n===t)){alert(t+" wurde bereits den Favoriten hinzugefügt!");return}i.push(t),localStorage.setItem(h,JSON.stringify(i))}function k(t){const n=l().filter(a=>a!==t);localStorage.setItem(h,JSON.stringify(n))}function v(t,i=!1){const n=H.find(a=>a.code===t);return n?"/wetter_app/conditionImages/"+n[i?"night":"day"]:null}const H=[{code:1e3,day:"day/sunny.jpg",night:"night/clear.jpg"},{code:1003,day:"day/partly_cloudy_day.jpg",night:"night/partly_cloudy_night.jpg"},{code:1006,day:"day/cloudy_day.jpg",night:"night/cloudy_night.jpg"},{code:1009,day:"day/cloudy_day.jpg",night:"night/cloudy_night.jpg"},{code:1030,day:"day/foggy_day.jpg",night:"night/foggy_night.jpg"},{code:1063,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1066,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1069,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1072,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1087,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1114,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1117,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1135,day:"day/foggy_day.jpg",night:"night/foggy_night.jpg"},{code:1147,day:"day/foggy_day.jpg",night:"night/foggy_night.jpg"},{code:1150,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1153,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1168,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1171,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1180,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1183,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1186,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1189,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1192,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1195,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1198,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1201,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1204,day:"day/rain_day.jpg",night:"night/rain_night.jpg"},{code:1207,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1210,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1213,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1216,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1219,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1222,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1225,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1237,day:"day/ice_pellets.jpg",night:"day/ice_pellets.jpg"},{code:1240,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1243,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1246,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1249,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1252,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1255,day:"day/snow_day.jpg",night:"night/snow_night.jpg"},{code:1258,day:"day/heavy_rain_day.jpg",night:"night/heavy_rain_night.jpg"},{code:1261,day:"day/ice_pellets.jpg",night:"day/ice_pellets.jpg"},{code:1264,day:"day/ice_pellets.jpg",night:"day/ice_pellets.jpg"},{code:1273,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1276,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1279,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"},{code:1282,day:"day/lightning_day.jpg",night:"night/lightning_night.jpg"}];function f(t="Lade..."){o.innerHTML=S(t)}function S(t){return`
    <div class="loading">
        <div class="loading__message">${t}</div>
        <div class="lds-hourglass"></div>
      </div>
    `}function r(t){return Math.floor(t)}function I(t){return t.split(" ")[1].split(":")[0]}function x(t,i){const n=t[0].hour,a=t[1].hour,e=[],s=n.findIndex(c=>c.time_epoch>i);for(let c=s-1;c<n.length;c++)e.push(n[c]);let d=0;for(;e.lenght<24;)e.push(a[d]),d++;return e}function F(t){const i=new Date(t);return["So","Mo","Di","Mi","Do","Fr","Sa"][i.getDay()]}function _(t){const i=t.includes("AM"),n=t.split(" ")[0];if(i)return n;const[a,e]=n.split(":");return Number(a)+12+":"+e}function M(t,i){let n=null;return(...a)=>{window.clearTimeout(n),n=window.setTimeout(()=>{t(...a)},i)}}async function j(t,i){f("Lade Wetter für "+t+"...");const n=await m(t);T(n,i),O(i)}function T(t,i){const{location:n,current:a,forecast:e}=t,s=e.forecastday[0],d=v(a.condition.code,a.is_day!==1);d&&(o.style=`--detail-condition-image: url(${d})`,o.classList.add("show-background"));const c=l().find(g=>g===i);o.innerHTML=A(!c)+R(n.name,r(a.temp_c),a.condition.text,r(s.day.maxtemp_c),r(s.day.mintemp_c))+C(s.day.condition.text,s.day.maxwind_kph,e.forecastday,a.last_updated_epoch)+q(e.forecastday)+N(a.humidity,a.feelslike_c,s.astro.sunrise,s.astro.sunset,a.precip_mm,a.uv)}function A(t=!0){return`
  <div class="action-bar">
  <div class="action-bar__back">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>

  </div>
  ${t?`  <div class="action-bar__favorite">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg></div>`:""} 
  </div>
  `}function R(t,i,n,a,e){return`
     <div class="current-weather">
        <h2 class="current-weather__location">${t}</h2>
        <h1 class="current-weather__current-temperature">${i}°</h1>
        <p class="current-weather__condition">${n}</p>
        <div class="current-weather__day-temperatures">
          <span class="current-weather__max-temperature">H:${a}°</span>
          <span class="current-weather__min-temperature">T:${e}°</span>
        </div>
     </div>
    `}function C(t,i,n,a){const s=x(n,a).filter(d=>d!==void 0).map((d,c)=>`
   <div class="hourly-forecast">
            <div class="hourly-forecast__time">${c===0?"Jetzt":I(d.time)+"Uhr"}</div>
            <img 
            src="https:${d.condition.icon}" 
            alt="" 
            class="hourly-forecast__icon" />
            <div class="hourly-forecast__temperature">${r(d.temp_c)}°</div>
          </div>
  `).join("");return`
   <div class="today-forecast">
        <div class="today-forecast__conditions">
          Heute ${t}. Wind bis zu ${i} km/h.
        </div>
        <div class="today-forecast__hours">
          ${s}
          </div>
          </div> 
  `}function q(t){return`
  <div class="forecast">
        <div class="forecast__title">Vorhersage für die nächsten 3 Tage:</div>
        <div class="forecast__days">
          ${t.map((a,e)=>`
    <div class="forecast-day">
            <div class="forecast-day__day">${e===0?"Heute":F(a.date)}</div>
            <img src="https:${a.day.condition.icon}" alt="" class="forecast-day__icon" />
            <div class="forecast-day__max-temp">H:${r(a.day.maxtemp_c)}°</div>
            <div class="forecast-day__min-temp">T:${r(a.day.mintemp_c)}°</div>
            <div class="forecast-day__wind">Wind:${a.day.maxwind_kph} km/h</div>
          </div>
    `).join("")}
        </div>
      </div>
  `}function N(t,i,n,a,e,s){return`
  <div class="mini-stats">
        <div class="mini-stat">
          <div class="mini-stat__heading">Feuchtigkeit</div>
          <div class="mini-stat__value">${t} %</div>
        </div>
         <div class="mini-stat">
          <div class="mini-stat__heading">Gefühl</div>
          <div class="mini-stat__value">${i} °</div>
        </div>
         <div class="mini-stat">
          <div class="mini-stat__heading">Sonnenaufgang</div>
          <div class="mini-stat__value">${_(n)} Uhr</div>
        </div>
         <div class="mini-stat">
          <div class="mini-stat__heading">Sonnenuntergang</div>
          <div class="mini-stat__value">${_(a)} Uhr</div>
        </div>
         <div class="mini-stat">
          <div class="mini-stat__heading">Niederschlag</div>
          <div class="mini-stat__value">${e} mm</div>
        </div>
         <div class="mini-stat">
          <div class="mini-stat__heading">UV-Index</div>
          <div class="mini-stat__value">${s}</div>
        </div>
      </div>
  `}function O(t){document.querySelector(".action-bar__back").addEventListener("click",()=>{w()});const n=document.querySelector(".action-bar__favorite");n==null||n.addEventListener("click",()=>{b(t),n.remove()})}async function w(){o.classList.remove("show-background"),f("Lade Übersicht.."),await B()}async function B(){o.innerHTML=`
    <div class="main-menu">
        ${D()}
        ${await P()}
    </div>
    `,J()}function D(){return`
        <div class="main-menu__heading">
          Wetter <button class="main-menu__edit">Bearbeiten</button>
        </div>
        <div class="main-menu__search-bar">
          <input
            type="text"
            class="main-menu__search-input"
            placeholder="Nach Stadt suchen..."
          />
          <div class="main-menu__search-results"></div>
        </div>
    `}const W=`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
`;async function P(){const t=l();if(!t||t.length<1)return"Noch keine Favoriten gespeichert.";const i=[];for(let a of t){const e=await m(a,1),{location:s,current:d,forecast:c}=e,g=c.forecastday[0],y=v(d.condition.code,d.is_day!==1),L=`
    <div class="city-wrapper">
          <div class="city-wrapper__delete" data-city-id="${a}">${W}</div>
          <div
            class="city"
            data-city-name="${s.name}"
            data-city-id="${a}"
            ${y?`style="
              --condition-image: url(${y});
            "`:""}
          >
            <div class="city__left-column">
              <h2 class="city__name">${s.name}</h2>
              <div class="city__country">${s.country}</div>
              <div class="city__condition">${d.condition.text}</div>
            </div>
            <div class="city__right-column">
              <div class="city-temperature">${r(d.temp_c)}°</div>
              <div class="city__min-max-temperature">H:${r(g.day.maxtemp_c)}° T:${r(g.day.mintemp_c)}°</div>
            </div>
          </div>
        </div>
    `;i.push(L)}return`
    <div class="main-menu__cities-list">
        ${i.join("")}
      </div>
    `}function z(t){const n=t.map(e=>`
      <div class="search-result" data-city-name="${e.name}" data-city-id="${e.id}">
      <h3 class="search-result__name">${e.name}</h3>
      <p class="search-result__country">${e.country}</p>
      </div>
  `).join(""),a=document.querySelector(".main-menu__search-results");a.innerHTML=n}function U(){const t=document.querySelector(".main-menu__search-results");t.innerHTML='<div class="search-result">Lade Vorschläge...</div>'}function V(){document.querySelectorAll(".search-result").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-city-name"),a=i.getAttribute("data-city-id");j(n,a)})})}function $(t){const i=document.querySelector(".main-menu__search-bar");if(!i){document.removeEventListener("click",$);return}i.contains(t.target)||document.querySelector(".main-menu__search-results").classList.add("main-menu__search-results--hidden")}function J(){const t=document.querySelector(".main-menu__edit"),i=document.querySelectorAll(".city-wrapper__delete");i.forEach(e=>{e.addEventListener("click",()=>{k(e.getAttribute("data-city-id")),e.parentElement.remove()})}),t.addEventListener("cick",()=>{const e="data-edit-mode";t.getAttribute(e)?(t.removeAttribute(e),t.textContent="Bearbeiten",i.forEach(s=>{s.classList.remove("city-wrapper__delete--show")})):(t.setAttribute(e,"true"),t.textContent="Fertig",i.forEach(s=>{s.classList.add("city-wrapper__delete--show")}))});const n=document.querySelector(".main-menu__search-input");n.addEventListener("input",M(async e=>{const s=e.target.value;let d=[];s.length>1&&(U(),d=await E(s)),z(d),V()},500)),document.addEventListener("click",$),n.addEventListener("focusin",()=>{document.querySelector(".main-menu__search-results").classList.remove("main-menu__search-results--hidden")}),document.querySelectorAll(".city").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-city-name"),d=e.getAttribute("data-city-id");j(s,d)})})}const o=document.getElementById("app");w();
