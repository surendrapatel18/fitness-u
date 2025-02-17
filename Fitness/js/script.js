 
 // Array of background image URLs
 const images = [
    'assets/images/background_banner-1.png',
    'assets/images/background_banner-2.png',
    'assets/images/background_banner-3.png',
    'assets/images/background_banner-4.png',
    'assets/images/background_banner-5.png'
  ];

  let currentImageIndex = 0;

  function changeBackgroundImage() {
    const wrapperSection = document.querySelector('.wrapper-section');
    wrapperSection.style.backgroundImage = ` linear-gradient(to bottom right, white, rgba(255, 255, 255, 0)), url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  setInterval(changeBackgroundImage, 2000);


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
      1024: {
        slidesPerView:4.5,
      },
      546: {
        slidesPerView:2.5,
      },
    },
    on: {
      slideChangeTransitionEnd: function () {
        let slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => slide.querySelector(".service-col-box").classList.remove("active"));
  
        let activeSlide = this.slides[this.activeIndex];
        activeSlide.querySelector(".service-col-box").classList.add("active");
      },
    },
  });
  

// Get the Current Year
const currentYear = new Date().getFullYear();

// set the current year in the Footer Copyright
document.getElementById('current-year').textContent = currentYear;


const toggleIcon = document.querySelector('.toggle-icon');
const navLinks = document.querySelector('.nav-links');

toggleIcon.addEventListener('click', () => {
  toggleIcon.classList.toggle('active');
  navLinks.classList.toggle('active');
});

