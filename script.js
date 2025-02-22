// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.container') && !e.target.closest('.nav-links')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Project filter system (optional)
const filterProjects = (category) => {
    // Add filtering logic next
};

// Dark/light mode toggle (optional)
const modeToggle = document.getElementById('mode-toggle');
if(modeToggle) {
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}