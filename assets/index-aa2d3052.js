(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const o={openMobileBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileBtn:document.querySelector("[data-mobile-menu-close]"),mobile:document.querySelector("[data-mobile-menu]")};o.openMobileBtn.addEventListener("click",n),o.closeMobileBtn.addEventListener("click",n);function n(){o.mobile.classList.toggle("is-hidden")}})();new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2.47,spaceBetween:18},1138:{slidesPerView:4,spaceBetween:18}},mousewheel:{invert:!0},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(n){for(var r=this,i=(r.document||r.ownerDocument).querySelectorAll(n),e=0;i[e]&&i[e]!==r;)++e;return Boolean(i[e])}),typeof o.closest!="function"&&(o.closest=function(n){for(var r=this;r&&r.nodeType===1;){if(r.matches(n))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");o.forEach(function(i){i.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+t+'"]');l.classList.add("active"),n.classList.add("active")})}),r.forEach(function(i){i.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(i){var e=i.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
