(() => {
  const refs = {
    openMobileBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-menu-close]"),
    mobile: document.querySelector("[data-mobile-menu]"),
    links: document.querySelectorAll("[data-mobile-menu-link]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleModal);
  refs.closeMobileBtn.addEventListener("click", toggleModal);

  refs.links.forEach((link) => {
    link.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.mobile.classList.toggle("is-hidden");
  }
})();