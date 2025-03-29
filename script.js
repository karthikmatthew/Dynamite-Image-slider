// Get the slider container, slides, and navigation buttons
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Set the initial slide index
let slideIndex = 0;

// Function to navigate to the previous slide
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Function to navigate to the next slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Add event listeners to the navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Set the initial slide position
slides.style.transform = `translateX(-${slideIndex * 100}%)`;
