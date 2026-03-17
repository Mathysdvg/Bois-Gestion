// On attend que le header soit chargé pour attacher l'événement
setTimeout(() => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.onglets');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animation optionnelle du burger (transforme en X)
            menuToggle.classList.toggle('is-active');
        });
    }
}, 500); // Le petit délai permet de s'assurer que fetch() a fini d'injecter le HTML