(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();(()=>{const o={openMobileBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileBtn:document.querySelector("[data-mobile-menu-close]"),mobile:document.querySelector("[data-mobile-menu]"),links:document.querySelectorAll("[data-mobile-menu-link]")};o.openMobileBtn.addEventListener("click",r),o.closeMobileBtn.addEventListener("click",r),o.links.forEach(t=>{t.addEventListener("click",r)});function r(){o.mobile.classList.toggle("is-hidden")}})();new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:18,breakpoints:{768:{slidesPerView:2.47,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},mousewheel:{},pagination:{el:".swiper-pagination"}});(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(r){for(var t=this,c=(t.document||t.ownerDocument).querySelectorAll(r),e=0;c[e]&&c[e]!==t;)++e;return!!c[e]}),typeof o.closest!="function"&&(o.closest=function(r){for(var t=this;t&&t.nodeType===1;){if(t.matches(r))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),r=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");o.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+n+'"]');i.classList.add("active"),r.classList.add("active")})}),t.forEach(function(c){c.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),r.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),r.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
