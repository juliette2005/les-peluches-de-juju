// Fonction pour activer le smooth scroll pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Défilement fluide vers la section correspondante
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation de survol des sections (effet de zoom sur les peluches)
const peluches = document.querySelectorAll('.peluche-section');
peluches.forEach(peluche => {
  peluche.addEventListener('mouseenter', () => {
    peluche.style.transform = 'scale(1.05)';
    peluche.style.transition = 'transform 0.3s ease';
  });

  peluche.addEventListener('mouseleave', () => {
    peluche.style.transform = 'scale(1)';
  });
});

// Fonction pour afficher un message de bienvenue à l'utilisateur lors du chargement
window.onload = function() {
  setTimeout(() => {
    alert('Bienvenue sur le site des peluches ! 🎉');
  }, 1000); // Affiche après 1 seconde
};

// Fonction pour ajouter un bouton de retour en haut de page
let backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Retour en haut';
backToTopBu
