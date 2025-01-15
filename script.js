// JavaScript for interactivity

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
}

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
if (scrollToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Image Carousel
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

if (prevButton && nextButton) {
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      document.getElementById('formMessage').textContent = 'Message sent successfully!';
      document.getElementById('formMessage').style.color = 'green';
      contactForm.reset();
    } else {
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
      document.getElementById('formMessage').style.color = 'red';
    }
  });
}