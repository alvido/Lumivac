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
  // Функция для инициализации слайдера
  function initSwiper(swiperElement) {
    new Swiper(swiperElement, {
      observer: true,
      observeParents: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Сделает скроллбар перетаскиваемым
      },
      spaceBetween: 24,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        561: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Инициализация слайдера "customer"
  if (document.querySelector("#product")) {
    new Swiper("#product", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".product-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.4, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование текущего слайда
        },
        561: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false, // Центрирование отключаем
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#reported")) {
    new Swiper("#reported", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование текущего слайда
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#personalization")) {
    new Swiper("#personalization", {
      observer: true,
      observeParents: true,
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".personalization-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".personalization-button-next",
        prevEl: ".personalization-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
        561: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
      },
    });
  }

  if (document.querySelector("#gallery__one")) {
    new Swiper("#gallery_one", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true, // Слайдер движется в обратную сторону
      },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
        },
        560: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
        },
        768: {
          slidesPerView: 4, // Один полный слайд и куски по бокам
        },
        1024: {
          slidesPerView: 5, // Один полный слайд и куски по бокам
        },
        1281: {
          slidesPerView: 7, // Один полный слайд и куски по бокам
        },
      },
    });
  }

  // Нижний слайдер — движение влево
  if (document.querySelector("#gallery__two")) {
    new Swiper("#gallery_two", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {

        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
        },
        560: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
        },
        768: {
          slidesPerView: 4, // Один полный слайд и куски по бокам
        },
        1024: {
          slidesPerView: 5, // Один полный слайд и куски по бокам
        },
        1281: {
          slidesPerView: 7, // Один полный слайд и куски по бокам
        },
      },
    });
  }


  // Инициализация слайдера "reported"
  if (document.querySelector("#explore")) {
    const swiper = new Swiper("#explore", {
      observer: true,
      observeParents: true,
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
          centeredSlides: false,
        },
        561: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
          centeredSlides: true,
        },
        1281: {
          slidesPerView: 5,
          spaceBetween: 20,
          centeredSlides: true,
        },
        1601: {
          slidesPerView: 7,
          spaceBetween: 30,
          centeredSlides: true,
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
            pauseButton.style.display = "block";
          } else {
            // Неактивные видео ставим на паузу
            video.pause();
            video.currentTime = 0;
            playButton.style.display = "block";
            pauseButton.style.display = "none";
          }

          // Событие, когда видео заканчивается
          video.addEventListener("ended", () => {
            playButton.style.display = "block";
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
          pauseButton.style.display = "block";
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
          playButton.style.display = "block";
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
            soundOffIcon.style.display = "block";
          } else {
            soundOnIcon.style.display = "block";
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

          playButton.style.display = "block";
          pauseButton.style.display = "none";
        });
      });
      handleVideoPlayback();
      updateSlideOpacity();
    });
  }



  var swiper = new Swiper(".swiper-thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {

      561: {
        slidesPerView: 5, // Показываем 8 слайдов
        spaceBetween: 14, // Расстояние между слайдами
      },
    },
  });
  var swiper2 = new Swiper(".swipper-gallery", {
    loop: true,
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

// mark
function updateStars() {
  const count = parseFloat(document.querySelector('.count').innerText); // Получаем значение count
  const stars = document.querySelectorAll('.mark .filled'); // Находим внутренние блоки для заполнения

  stars.forEach((star, index) => {
    if (index < Math.floor(count)) {
      // Полностью закрашенные звёзды
      star.style.width = "100%";
    } else if (index === Math.floor(count)) {
      // Частично закрашенная звезда
      const percentage = (count - Math.floor(count)) * 100;
      star.style.width = `${percentage}%`;
    } else {
      // Пустые звёзды
      star.style.width = "0%";
    }
  });
}

// Вызываем функцию для обновления звёзд
updateStars();
// mark

//faq
// Находим все элементы с классом .faq-question
const faqItems = document.querySelectorAll('.faq__item');

// Добавляем обработчик события на каждый элемент
faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  question.addEventListener('click', () => {
    // Закрываем все ответы перед открытием нового
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    // Переключаем состояние (открыть/закрыть)
    item.classList.toggle('active');
  });
});
//faq


//size selector
// Скрипт для добавления активного класса
const options = document.querySelectorAll('.size-option');
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
});
//size selector


//color selector
// Логика выбора цвета
const buttonPalette = document.getElementById('color-palette');
const colorPalette = document.querySelector('.color-options');
const colorOptions = document.querySelectorAll('.color-option');
const selectedColorName = document.getElementById('selected-color-name');
const selectedColorCircle = document.getElementById('selected-color-circle');

buttonPalette.addEventListener('click', function () {
  this.classList.toggle('active'); // Работает корректно, так как используется обычная функция
  colorPalette.classList.toggle('show');
});


colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Удаляем класс active со всех опций
    colorOptions.forEach(opt => opt.classList.remove('active'));

    // Добавляем active к выбранной
    option.classList.add('active');

    // Обновляем текст и круг выбранного цвета
    const colorName = option.getAttribute('data-color');
    selectedColorName.textContent = colorName;
    selectedColorCircle.style.backgroundColor = option.style.backgroundColor;
  });
});


//color selector

// personalization
const personalizationOpen = document.getElementById('personalizationButton');
const personalizationClose = document.getElementById('personalizationClose');
const personalizationSelector = document.querySelector('.personalization-selector');
const personalization = document.querySelectorAll('.personalization-option');


personalizationOpen.addEventListener('click', function () {
  personalizationSelector.classList.add('active');
});
personalizationClose.addEventListener('click', function () {
  personalizationSelector.classList.remove('active');
});

personalization.forEach(style => {
  style.addEventListener('click', () => {
    personalization.forEach(opt => opt.classList.remove('active'));
    style.classList.add('active');
  });
});

// personalization


//gallery 
document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".gallery__container");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = modal.querySelector(".close");
  const body = document.body;

  galleries.forEach((galleryContainer) => {
    const galleryList = galleryContainer.querySelector(".gallery__list");
    const clonedList = galleryContainer.querySelector(".gallery__list--clone"); // Находим второй список вручную

    // Функция для обновления ширины элементов списка
    const updateGalleryLayout = () => {
      const containerWidth = galleryContainer.offsetWidth; // Ширина контейнера
      let itemWidth = 100;

      if (window.innerWidth >= 1024) {
        itemWidth = containerWidth / 7; // 7 слайдов на экранах более 1024px
      } else if (window.innerWidth >= 768) {
        itemWidth = containerWidth / 5; // 5 слайдов на экранах от 768px до 1024px
      } else if (window.innerWidth >= 480) {
        itemWidth = containerWidth / 3; // 3 слайда на экранах от 480px до 768px
      } else {
        itemWidth = containerWidth / 2; // 2 слайда на экранах до 480px
      }

      // Обновляем ширину и позицию обоих списков
      galleryList.style.width = `${itemWidth * galleryList.children.length}px`;
      clonedList.style.width = `${itemWidth * clonedList.children.length}px`;

      [...galleryList.children, ...clonedList.children].forEach((li) => {
        li.style.width = `${itemWidth}px`;
      });

      // Перемещаем второй список, чтобы он был рядом с первым
      clonedList.style.transform = `translateX(${containerWidth}px)`;
    };

    // Запуск обновления при загрузке и изменении размера экрана
    updateGalleryLayout();
    window.addEventListener("resize", updateGalleryLayout);

    // Открытие модального окна при клике на изображение
    galleryContainer.querySelectorAll("img").forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex"; // Показать модальное окно
        modalImg.src = img.src; // Установить источник изображения
        body.classList.add("lock"); // Останавливаем анимацию
        galleryContainer.querySelectorAll(".gallery__list").forEach((list) => {
          list.style.animationPlayState = "paused"; // Остановить анимацию
        });
      });
    });
  });

  // Закрытие модального окна
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("lock"); // Возобновляем анимацию
    galleries.forEach((galleryContainer) => {
      galleryContainer.querySelectorAll(".gallery__list").forEach((list) => {
        list.style.animationPlayState = "running"; // Возобновить анимацию
      });
    });
  });

  // Закрытие модального окна при клике вне изображения
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("lock"); // Возобновляем анимацию
      galleries.forEach((galleryContainer) => {
        galleryContainer.querySelectorAll(".gallery__list").forEach((list) => {
          list.style.animationPlayState = "running"; // Возобновить анимацию
        });
      });
    }
  });
});


//gallery 