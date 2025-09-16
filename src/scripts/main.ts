import "../styles/main.scss";

import Typed from "typed.js";
import AOS from "aos";
import Lenis from "lenis";
import MicroModal from "micromodal";
import GLightbox from "glightbox";
import { CountUp } from "countup.js";
import { AccordionCollection } from "./components";
import { BackTopButton } from "./components";

import "lenis/dist/lenis.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";

document.addEventListener("DOMContentLoaded", (): void => {
  new BackTopButton(400, "top");

  new AccordionCollection();

  const countUpPartners = new CountUp("partners", 40, {
    suffix: "+",
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  countUpPartners.start();
  const countUpClients = new CountUp("clients", 459, {
    suffix: "+",
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  countUpClients.start();
  const countUpOrdersOnline = new CountUp("orders-online", 12, {
    suffix: "k+",
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  countUpOrdersOnline.start();

  const myGallery = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
  });

  const dishesGalleryButton = document.querySelector("[data-dishes-gallery]");
  if (dishesGalleryButton) {
    dishesGalleryButton.addEventListener("click", () => {
      myGallery.open();
    });
  }

  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
  });

  new Lenis({
    autoRaf: true,
    duration: 1.6,
    anchors: true,
  });

  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 200,
  });

  new Typed("#typed-title", {
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
