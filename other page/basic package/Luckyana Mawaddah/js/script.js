// 🌙 Toggle Menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// 🌸 Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
