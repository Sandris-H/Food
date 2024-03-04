(()=>{"use strict";function e(e,t){const n=document.querySelector(e);n.classList.add("show","fade"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show","fade"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>e(".modal",n)),5e4);(function(e,t,n,o){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),c=document.querySelector(n);function a(){r.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),s.forEach((e=>{e.classList.remove(o)}))}function i(e=0){r[e].classList.add("show","fade"),r[e].classList.remove("hide"),s[e].classList.add(o)}a(),i(),c.addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n==e&&(a(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,s){const r=document.querySelectorAll(n),c=document.querySelector(o);r.forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),c.addEventListener("click",(e=>{e.target!==c&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&c.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(e(o,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,t){const o=document.querySelector(e),s=o.querySelector("#days"),r=o.querySelector("#hours"),c=o.querySelector("#minutes"),a=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){let t,n,o,s;const r=Date.parse(e)-Date.parse(new Date);return r<=0?(t=0,n=0,o=0,s=0):(t=Math.floor(r/864e5),n=Math.floor(r/36e5%24),o=Math.floor(r/6e4%60),s=Math.floor(r/1e3%60)),{total:r,days:t,hours:n,minutes:o,seconds:s}}(t);s.textContent=n(e.days),r.textContent=n(e.hours),c.textContent=n(e.minutes),a.textContent=n(e.seconds),e.timeInterval<=0&&clearInterval(i)}l()}(e,t)}(".timer","2024-03-21"),function(){class e{constructor(e,t,n,o,s,r,...c){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s,this.classes=c,this.parent=document.querySelector(r),this.currencyTranfer=27,this.changeToCurrency()}changeToCurrency(){this.price=this.price*this.currencyTranfer}render(){const e=document.createElement("div");0===this.classes.length?(this.element="menu__item",e.classList.add(this.element)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n              <img src=${this.src} alt=${this.alt}>\n              <h3 class="menu__item-subtitle">${this.title}</h3>\n              <div class="menu__item-descr">${this.descr}</div>\n              <div class="menu__item-divider"></div>\n              <div class="menu__item-price">\n                <div class="menu__item-cost">Цена:</div>\n                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n              </div>\n          `,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,alting:n,title:o,descr:s,price:r})=>{new e(t,n,o,s,r,".menu .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,r;function c(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function a(){e.textContent=t&&n&&o&&s&&r?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*r):Math.round((88.36+13.4*o+4.8*n-5.7*s)*r):"____"}function i(e,n){const o=document.querySelectorAll(`${e} div`);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(r=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",r)):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t)),o.forEach((e=>e.classList.remove(n))),e.target.classList.add(n),a()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}a()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex",t)),localStorage.getItem("ratio")?r=localStorage.getItem("ratio"):(r=1.375,localStorage.setItem("ratio",r)),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),a(),i("#gender","calculating__choose-item_active"),i(".calculating__choose_big","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,o){function s(n){const s=document.querySelector(".modal__dialog");s.classList.add("hide"),e(".modal",o);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n        <div class='modal__content'>\n          <div class='modal__close' data-close>×</div>\n          <div class='modal__title' >${n}</div>\n        </div>\n      `,document.querySelector(".modal").append(r),setTimeout((()=>{r.remove(),s.classList.add("show"),s.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n            display: block;\n            margin: 0 auto;\n        ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),s("Thanks. We will contact tou soon"),n.remove()})).catch((()=>{s("Something went wrong...")})).finally((()=>{t.reset()}))}))}))}("form",n),function({container:e,slide:t,nextArrow:n,prevArrow:o,totalCounter:s,currentCounter:r,wrapper:c,field:a}){const i=document.querySelectorAll(t),l=document.querySelector(e),d=document.querySelector(o),u=document.querySelector(n),m=document.querySelector(r),h=document.querySelector(s),g=document.querySelector(c),f=document.querySelector(a),y=window.getComputedStyle(g).width;let p=1,v=0;i.length<10?(h.textContent=`0${i.length}`,m.textContent=`0${p}`):(h.textContent=i.length,m.textContent=p),f.style.width=100*i.length+"%",f.style.display="flex",f.style.transition="0.5s all",g.style.overflow="hidden",i.forEach((e=>e.style.width=y)),l.style.position="relative";const _=document.createElement("ol"),w=[];_.classList.add("carousel-indicators"),_.style.cssText="\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 15;\n      display: flex;\n      justify-content: center;\n      margin-right: 15%;\n      margin-left: 15%;\n      list-style: none;\n  ",l.append(_);for(let e=0;e<i.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n      box-sizing: content-box;\n      flex: 0 1 auto;\n      width: 30px;\n      height: 6px;\n      margin-right: 3px;\n      margin-left: 3px;\n      cursor: pointer;\n      background-color: #fff;\n      background-clip: padding-box;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      opacity: .5;\n      transition: opacity .6s ease;\n    ",0==e&&(t.style.opacity=1),_.append(t),w.push(t)}u.addEventListener("click",(()=>{v==+y.slice(0,y.length-2)*(i.length-1)?v=0:v+=+y.slice(0,y.length-2),f.style.transform=`translateX(-${v}px)`,p==i.length?p=1:p++,i.length<10?m.textContent=`0${p}`:m.textContent=p,w.forEach((e=>e.style.opacity="0.5")),w[p-1].style.opacity=1})),d.addEventListener("click",(()=>{0==v?v=+y.slice(0,y.length-2)*(i.length-1):v-=+y.slice(0,y.length-2),f.style.transform=`translateX(-${v}px)`,1==p?p=i.length:p--,i.length<10?m.textContent=`0${p}`:m.textContent=p,w.forEach((e=>e.style.opacity="0.5")),w[p-1].style.opacity=1})),w.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");p=t,v=+y.slice(0,y.length-2)*(t-1),f.style.transform=`translateX(-${v}px)`,i.length<10?m.textContent=`0${p}`:m.textContent=p,w.forEach((e=>e.style.opacity="0.5")),w[p-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})();
//# sourceMappingURL=bundle.js.map