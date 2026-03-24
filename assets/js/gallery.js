// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {

    // Récupérer les éléments
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementsByClassName('lightbox-close')[0];
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Pour chaque item de la galerie
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Ouvrir la lightbox
            lightbox.style.display = "block";
            // Récupérer l'image cliquée (l'enfant img de .gallery-item)
            const img = this.querySelector('.gallery-image');
            // Mettre la source de l'image cliquée dans la lightbox
            lightboxImg.src = img.src;

            // Empêcher le scroll de la page derrière
            document.body.style.overflow = 'hidden';
        });
    });

    // Fonction pour fermer la lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
        // Rétablir le scroll de la page
        document.body.style.overflow = 'auto';
    }

    // Fermer quand on clique sur la croix
    closeBtn.addEventListener('click', closeLightbox);

    // Fermer quand on clique n'importe où en dehors de l'image
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Fermer avec la touche Echap du clavier
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape" && lightbox.style.display === "block") {
            closeLightbox();
        }
    });
});