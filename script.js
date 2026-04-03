const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const posterCards = document.querySelectorAll('.poster-card');
if (posterCards.length > 0) {
  let activeIndex = 0;
  posterCards[activeIndex].classList.add('is-active');

  setInterval(() => {
    posterCards[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + 1) % posterCards.length;
    posterCards[activeIndex].classList.add('is-active');
  }, 2200);
}
