const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselImages.style.transform = `translateX(${-size * ++counter}px)`;
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselImages.style.transform = `translateX(${-size * --counter}px)`;
});
