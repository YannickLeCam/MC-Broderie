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
carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);