// script.js

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Keyboard arrow navigation
const slides = Array.from(document.querySelectorAll('section'));
let currentIndex = 0;

function scrollToSlide(index) {
  if (index >= 0 && index < slides.length) {
    slides[index].scrollIntoView({ behavior: 'smooth' });
    currentIndex = index;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    scrollToSlide(currentIndex + 1);
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    scrollToSlide(currentIndex - 1);
  }
});
