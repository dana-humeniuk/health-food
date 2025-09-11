import "../styles/main.scss";

const initUIComponents = (): void => {};

document.addEventListener("DOMContentLoaded", (): void => {
  initUIComponents();

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
