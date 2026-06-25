

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const backToTopBtn = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');

/* 1. Hamburger menu: open/close on click, and close after picking a link */
hamburger.addEventListener('click', function () {
  console.log('Hamburger menu clicked');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    console.log('Navigation link clicked');
    navLinks.classList.remove('open');
  });
});

/* 2. On scroll: show/hide Back to Top button + add navbar shadow */
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
  navbar.style.boxShadow = window.scrollY > 30 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';
});

backToTopBtn.addEventListener('click', function () {
  console.log('Back To Top button clicked');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* 3. Scroll animations: fade elements in once they appear on screen */
const animatedElements = document.querySelectorAll('.feature-card, .product-row, .app-card');

const fadeObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(function (el) {
  fadeObserver.observe(el);
});


