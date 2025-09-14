import "../styles/main.scss";

import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", (): void => {
  AOS.init(
    {
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    }
  );

  const typed = new Typed("#typed-title", {
    strings: ["live a healthier life", "eat well, feel great", "boost your energy"],
    typeSpeed: 50,
    loop: true,
    backSpeed: 50,
    showCursor: true,
    cursorChar: "|",
  });

  //@ts-expect-error swiper declaration file is not found
  const dishesSwiper = new Swiper(".dishes__main", {
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
      580: {
        slidesPerView: 2.3,
      },
      767: {
        slidesPerView: 2.5,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });

  //@ts-expect-error swiper declaration file is not found
  const reviewsSwiper = new Swiper(".reviews__main", {
    navigation: {
      nextEl: ".reviews__main-navigation-arrow--next",
      prevEl: ".reviews__main-navigation-arrow--prev",
    },
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      480: {
        slidesPerView: 1.3,
      },

      991: {
        slidesPerView: 2,
      },
    },
  });
});
