document.addEventListener("DOMContentLoaded", function () {
    const galleryGrid = document.querySelector('.gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    const allImages = [
        "bois47.jpeg", "camion.jpeg", "camion2.jpeg", "chemin_bois.jpeg",
        "chemin_neige.jpeg", "famille.jpeg", "gros_bois.jpeg", "gros_troncon.jpeg",
        "grosse_pile_bois.jpeg", "grosse_pile_piquet.jpeg", "grume.jpeg",
        "machine.jpeg", "marie_bois.jpeg", "mini_pile_bois.jpeg",
        "petite_pile_bois.jpeg", "pile_bois_piquet.jpeg", "pile_bois_soleil.jpeg",
        "pile_piquet.jpeg", "quercus_cote.jpeg", "tracteur.jpeg", "tracteur2.jpeg", "tracteur3.jpeg", "tron_pres.jpeg"
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledImages = shuffle([...allImages]);
    const selectedImages = shuffledImages.slice(0, 9);

    if (galleryGrid) {
        galleryGrid.innerHTML = '';

        selectedImages.forEach(imgName => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="assets/images/gallerie/${imgName}" alt="Exploitation forestière - Bois Gestion" class="gallery-image">
                <div class="overlay"><i class="fas fa-search-plus"></i></div>
            `;

            // AJOUT DU CLIC POUR LE GRAND ÉCRAN
            item.addEventListener('click', function () {
                if (lightbox && lightboxImg) {
                    const src = this.querySelector('img').src;
                    lightboxImg.src = src;
                    lightbox.style.display = 'flex'; // ou 'block' selon votre CSS
                }
            });

            galleryGrid.appendChild(item);
        });
    }

    // FERMETURE DE LA LIGHTBOX
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    // Fermer aussi en cliquant sur le fond noir
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});