// Sélection de la barre de navigation
var navBar = document.querySelector('nav');
var lastScrollTop = 0;

// apparition et disparition barre de nav
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-100px";
    } else {
        navBar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});


// Menu burger (pour les appareils mobile)

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const menuItems = navLinks.querySelectorAll('a'); 

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});


