document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > (window.innerHeight)-20) { // Vous pouvez ajuster cette valeur selon vos besoins
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    // Assure que l'index est dans les limites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    // Déplace les slides
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startCarousel() {
    intervalId = setInterval(nextSlide, 3000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

// Démarre le carrousel automatiquement
startCarousel();

// Arrête et reprend le carrousel au survol
const carousel = document.getElementById('carousel');
/*
carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);
*/

let currentIndex2 = 0;

function showSlide2(index) {
    const slides2 = document.querySelectorAll('.carousel-item2');
    const totalSlides2 = slides2.length;
    
    // Assure que l'index est dans les limites
    if (index >= totalSlides2) {
        currentIndex2 = 0;
    } else if (index < 0) {
        currentIndex2 = totalSlides2 - 1;
    } else {
        currentIndex2 = index;
    }
    
    // Déplace les slides
    const carouselInner2 = document.querySelector('.carousel-inner2');
    carouselInner2.style.transform = 'translateX(' + (-currentIndex2 * 100) + '%)';
}
function nextSlide2() {
    showSlide2(currentIndex2 + 1);
}

function startCarousel2() {
    intervalId2 = setInterval(nextSlide2, 3000);
}

function stopCarousel2() {
    clearInterval(intervalId2);
}

// Démarre le carrousel automatiquement
startCarousel2();

// Arrête et reprend le carrousel au survol
const carousel2 = document.getElementById('carousel2');
/*
carousel2.addEventListener('mouseenter', stopCarousel2);
carousel2.addEventListener('mouseleave', startCarousel2);
*/