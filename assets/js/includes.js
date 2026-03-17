/**
 * Fonction pour charger les composants HTML (Header/Footer)
 * @param {string} id - L'ID de la balise destination
 * @param {string} file - Le chemin du fichier à charger
 * @param {function} callback - Une fonction à exécuter après le chargement (optionnel)
 */
function loadComponent(id, file, callback) {
    const element = document.getElementById(id);
    if (!element) return;

    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Erreur de chargement : " + file);
            return response.text();
        })
        .then(data => {
            element.innerHTML = data;
            // Si on a un callback (comme pour le menu burger), on l'exécute ici
            if (callback) callback();
        })
        .catch(error => console.error(error));
}

/**
 * Initialisation du Menu Burger
 * Cette fonction est appelée UNIQUEMENT après que le Header soit chargé.
 */
function initBurgerMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.onglets');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Ouvre/Ferme le menu
            navLinks.classList.toggle('active');

            // Animation des barres du burger (si tu as le CSS pour)
            menuToggle.classList.toggle('is-active');
        });

        // Fermer le menu si on clique sur un lien (utile pour les ancres #)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// --- LANCEMENT DES CHARGEMENTS ---

// On charge le Header et on lui passe la fonction du Burger en "callback"
loadComponent('header-placeholder', 'includes/header.html', initBurgerMenu);

// On charge le Footer normalement
loadComponent('footer-placeholder', 'includes/footer.html');