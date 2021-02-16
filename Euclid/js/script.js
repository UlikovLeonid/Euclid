var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  loop: true,
});
window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#toggle__menu")
    .addEventListener("click", function (e) {
      document
        .querySelector("#toggle__menu", "#header__menu")
        .classList.toggle("is-active");
    });
});
window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#toggle__menu")
    .addEventListener("click", function (e) {
      document.querySelector("#header__menu").classList.toggle("is-active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__link").forEach(function (tabsLink) {
    tabsLink.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content-active");
    });
  });
});
