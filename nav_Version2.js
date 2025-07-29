// Ajoute la classe 'active' au lien correspondant à la page courante
const navLinks = document.querySelectorAll('.emas-nav ul li a');
navLinks.forEach(link => {
  if (window.location.pathname.endsWith(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});