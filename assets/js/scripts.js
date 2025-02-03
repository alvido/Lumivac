// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let mobileNav = document.querySelector(".mobile__nav");
  let closeBtn = mobileNav.querySelector("#closeMenu");
  let links = document.querySelectorAll(".nav__list a");
  let body = document.querySelector("body");


  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.add("burger--active");
      mobileNav.classList.add("nav--active");
      //  body.classList.add("lock");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      burgerButton.classList.remove("burger--active");
      mobileNav.classList.remove("nav--active");
      body.classList.remove("lock");
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      mobileNav.classList.remove("nav--active");
      body.classList.remove("lock");
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }

});
//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация слайдера "reported"
  if (document.querySelector("#explore")) {
    const swiper = new Swiper("#explore", {
      observer: true,
      observeParents: true,
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".explore-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".explore-button-next",
        prevEl: ".explore-button-prev",
      },
      on: {
        slideChangeTransitionEnd: function () {
          handleVideoPlayback();
          updateSlideOpacity();
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        561: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1281: {
          slidesPerView: 5,
        },
        1601: {
          slidesPerView: 7,
        },
      },
    });

    // Функция управления воспроизведением видео
    function handleVideoPlayback() {
      const slides = document.querySelectorAll("#explore .swiper-slide");
      slides.forEach((slide) => {
        const video = slide.querySelector("video");
        const playButton = slide.querySelector(".play");
        const pauseButton = slide.querySelector(".pause");

        if (video) {
          // Активное видео начинает воспроизведение
          if (slide.classList.contains("swiper-slide-active")) {
            video.play();
            playButton.style.display = "none";
            pauseButton.style.display = "flex";
          } else {
            // Неактивные видео ставим на паузу
            video.pause();
            video.currentTime = 0;
            playButton.style.display = "flex";
            pauseButton.style.display = "none";
          }

          // Событие, когда видео заканчивается
          video.addEventListener("ended", () => {
            playButton.style.display = "flex";
            pauseButton.style.display = "none";
          });
        }
      });
    }

    // Функция для обновления прозрачности слайдов
    function updateSlideOpacity() {
      const slides = document.querySelectorAll("#explore .swiper-slide");
      slides.forEach((slide) => {
        if (
          slide.classList.contains("swiper-slide-active") ||
          slide.classList.contains("swiper-slide-prev") ||
          slide.classList.contains("swiper-slide-next")
        ) {
          slide.style.opacity = "1"; // Полностью видимые
        } else {
          slide.style.opacity = "0.5"; // Затемненные
        }
      });
    }

    // Обработчик для кнопок воспроизведения
    document.querySelectorAll(".swiper-slide .play").forEach((button) => {
      button.addEventListener("click", (event) => {
        const slide = event.target.closest(".swiper-slide");
        const video = slide.querySelector("video");
        const playButton = slide.querySelector(".play");
        const pauseButton = slide.querySelector(".pause");

        if (video) {
          video.play();
          playButton.style.display = "none";
          pauseButton.style.display = "flex";
        }
      });
    });

    // Обработчик для кнопок паузы
    document.querySelectorAll(".swiper-slide .pause").forEach((button) => {
      button.addEventListener("click", (event) => {
        const slide = event.target.closest(".swiper-slide");
        const video = slide.querySelector("video");
        const playButton = slide.querySelector(".play");
        const pauseButton = slide.querySelector(".pause");

        if (video) {
          video.pause();
          playButton.style.display = "flex";
          pauseButton.style.display = "none";
        }
      });
    });

    // Обработчик для кнопок звука
    document.querySelectorAll(".swiper-slide .sound").forEach((button) => {
      button.addEventListener("click", (event) => {
        const slide = event.target.closest(".swiper-slide");
        const video = slide.querySelector("video");
        const soundOnIcon = button.querySelector(".sound-on");
        const soundOffIcon = button.querySelector(".sound-off");

        if (video) {
          // Переключаем звук для видео
          video.muted = !video.muted;

          // Обновляем видимость иконок
          if (video.muted) {
            soundOnIcon.style.display = "none";
            soundOffIcon.style.display = "flex";
          } else {
            soundOnIcon.style.display = "flex";
            soundOffIcon.style.display = "none";
          }
        }
      });
    });

    // Событие: при загрузке страницы все видео запускаются без звука
    window.addEventListener("load", () => {
      const videos = document.querySelectorAll("#explore video");
      videos.forEach((video) => {
        video.muted = true; // Отключаем звук

        // Добавляем обработчик события "ended" для переключения кнопок
        video.addEventListener("ended", () => {
          const slide = video.closest(".swiper-slide");
          const playButton = slide.querySelector(".play");
          const pauseButton = slide.querySelector(".pause");

          playButton.style.display = "flex";
          pauseButton.style.display = "none";
        });
      });
      handleVideoPlayback();
      updateSlideOpacity();
    });
  }

  // Инициализация слайдера "customer"
  if (document.querySelector("#customers")) {
    new Swiper("#customers", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".customers-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".customers-button-next",
        prevEl: ".customers-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  var swiper = new Swiper(".swiper-thumb", {
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 1, // Значение по умолчанию

    breakpoints: {
      320: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
      561: {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  });

  var swiper2 = new Swiper(".swipper-gallery", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

});
// swiper

//faq collapse
$(document).ready(function () {
  // Обработчик клика на элемент с классом faq__title
  $(".action").on("click", function () {
    // Находим ближайший родительский элемент с классом faq__item
    var $item = $(this).closest(".faq__item");
    // Переключаем класс active у найденного элемента
    $item.toggleClass("active");
  });

  // Обработчик клика на элемент с классом faq__btn
  $(".faq__btn").on("click", function () {
    // Находим ближайший родительский элемент с классом faq__item
    var $item = $(this).closest(".faq__item");
    // Переключаем класс active у найденного элемента
    $item.toggleClass("active");
  });
});
//faq collapse

//
function updateBackgrounds() {
  const isMobile = window.innerWidth <= 768;

  document.querySelectorAll(".product").forEach(section => {
    const desktopBg = section.getAttribute("data-desktop-bg");
    const mobileBg = section.getAttribute("data-mobile-bg");

    if (isMobile && mobileBg) {
      section.style.backgroundImage = `url(${mobileBg})`;
    } else if (desktopBg) {
      section.style.backgroundImage = `url(${desktopBg})`;
    }
  });
}

document.addEventListener("DOMContentLoaded", updateBackgrounds);
window.addEventListener("resize", updateBackgrounds);

//