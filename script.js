 // Updated Smooth Scroll with Offset Calculation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
            top: targetPosition - headerOffset,
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Handling
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});