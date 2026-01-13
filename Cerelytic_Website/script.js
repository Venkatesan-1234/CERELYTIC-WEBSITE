// Mobile Menu Toggle logic
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 26, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 26, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});