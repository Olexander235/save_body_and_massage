/* Слайдер главный*/
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dotsContainer = document.createElement("div");
dotsContainer.classList.add("dot-container");

// Создаем индикаторы (точки) для каждого слайда
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

// Добавляем индикаторы в слайдер
document.querySelector(".slideshow-container").appendChild(dotsContainer);
const dots = document.querySelectorAll(".dot");

function showSlides() {
    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Функция для смены слайда по кнопкам
function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Функция для перехода к конкретному слайду
function goToSlide(n) {
    slideIndex = n;
    showSlides();
}

// Автоматическое переключение слайдов
function autoSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

// Привязываем кнопки "Назад" и "Вперёд"
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

// Запускаем слайдер
showSlides();
setInterval(autoSlide, 5000); // Автоматическое переключение каждые 5 секунд


/*окончание кода*/




























        

        function toggleMenu() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('show'); // Добавляем/удаляем класс "show" для раскрытия меню
        }


        document.addEventListener("DOMContentLoaded", function () {
            const burger = document.querySelector(".burger-menu");
            const navbar = document.querySelector(".navbar");
        
            if (!burger || !navbar) {
                console.error("Ошибка: не найден burger-menu или navbar.");
                return;
            }
        
            // Открытие/закрытие меню
            burger.addEventListener("click", function () {
                const isActive = navbar.classList.toggle("active");
                burger.classList.toggle("active");
                burger.setAttribute("aria-expanded", isActive ? "true" : "false");
            });
        
            // Закрытие меню при клике на ссылку
            document.querySelectorAll(".navbar a").forEach(link => {
                link.addEventListener("click", () => {
                    burger.classList.remove("active");
                    navbar.classList.remove("active");
                    burger.setAttribute("aria-expanded", "false");
                });
            });
        
            // Закрытие меню при клике вне его
            document.addEventListener("click", (event) => {
                if (!navbar.contains(event.target) && !burger.contains(event.target)) {
                    burger.classList.remove("active");
                    navbar.classList.remove("active");
                    burger.setAttribute("aria-expanded", "false");
                }
            });
        });
        
          





        const newsSlider = document.querySelector('.news-slider');
        const leftArrow = document.querySelector('.arrow-left');
        const rightArrow = document.querySelector('.arrow-right');
    
        rightArrow.addEventListener('click', () => {
            newsSlider.scrollBy({ left: 320, behavior: 'smooth' });
        });
    
        leftArrow.addEventListener('click', () => {
            newsSlider.scrollBy({ left: -320, behavior: 'smooth' });
        });



 /* слайдер блока сертификатов */
 // Функция для инициализации слайдера
function initSlider(sliderId) {
    let slideIndex = 0;
    const slider = document.querySelector(`#${sliderId} .slider`);
    const slides = slider.querySelectorAll(".slide");
    const totalSlides = slides.length;
  
    function showSlide(index) {
      slides.forEach(slide => slide.style.display = "none");
      slides[index].style.display = "block";
    }
  
    function moveSlide(n) {
      slideIndex = (slideIndex + n + totalSlides) % totalSlides; // цикличность слайдов
      showSlide(slideIndex);
    }
  
    // Автоматическая смена слайдов
    function autoSlide() {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
    }
  
    showSlide(slideIndex);
    setInterval(autoSlide, 5000); // смена слайдов каждые 5 секунд
  
    // Привязка кнопок для переключения слайдов
    document.querySelector(`#${sliderId} .prev`).addEventListener("click", () => moveSlide(-1));
    document.querySelector(`#${sliderId} .next`).addEventListener("click", () => moveSlide(1));
  }
  
  // Инициализация слайдеров
  initSlider("slider1");
 



  /* отправка сообщений */
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Отмена стандартной отправки формы

    let formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("status").innerHTML = data; // Вывод ответа от сервера
    })
    .catch(error => {
        document.getElementById("status").innerHTML = "Ошибка отправки!";
        console.error("Ошибка:", error);
    });
});
  




