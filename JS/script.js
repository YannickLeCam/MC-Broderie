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
