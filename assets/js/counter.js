// Fonction pour l'animation du compteur numérique
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Plus le chiffre est bas, plus c'est rapide

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Le chiffre final
            const count = +counter.innerText; // Le chiffre actuel

            // Calcul de l'incrémentation
            const inc = target / speed;

            // Si le chiffre actuel est inférieur à la cible
            if (count < target) {
                // On ajoute l'incrément et on arrondit à l'entier supérieur
                counter.innerText = Math.ceil(count + inc);
                // On relance la fonction après un court délai
                setTimeout(updateCount, 10);
            } else {
                // Si on a atteint ou dépassé la cible, on fixe le chiffre final
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Intersection Observer pour lancer l'animation quand la section est visible
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section');
    const statItems = document.querySelectorAll('.stat-item');

    const observerOptions = {
        root: null, // Relatif au viewport
        threshold: 0.3 // L'animation se lance quand 30% de la section est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. On lance l'animation d'apparition des cartes
                statItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 150); // Petit délai entre chaque carte
                });

                // 2. On lance le compteur numérique
                animateCounters();

                // 3. On arrête d'observer une fois lancé
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (statsSection) {
        observer.observe(statsSection);
    }
});