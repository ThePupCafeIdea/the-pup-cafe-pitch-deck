// Optional: Add keyboard navigation (← and → arrows)
document.addEventListener("keydown", function (event) {
  const slides = document.querySelectorAll(".slide");
  const currentY = window.scrollY;
  const slidePositions = Array.from(slides).map(s => s.offsetTop);
  
  let currentIndex = slidePositions.findIndex(pos => currentY < pos + 50);
  if (currentIndex === -1) currentIndex = slidePositions.length - 1;

  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    const nextIndex = Math.min(currentIndex + 1, slides.length - 1);
    slides[nextIndex].scrollIntoView({ behavior: "smooth" });
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    const prevIndex = Math.max(currentIndex - 1, 0);
    slides[prevIndex].scrollIntoView({ behavior: "smooth" });
  }
});

// Optional: Fade-in effect on scroll
const faders = document.querySelectorAll(".slide");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(slide => {
  appearOnScroll.observe(slide);
});