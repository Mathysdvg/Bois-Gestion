// On récupère les éléments
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close-modal");

// On sélectionne toutes les images des produits
const images = document.querySelectorAll(".produit-figure img");

images.forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Utilise le texte 'alt' comme légende
    }
});

// Fermer au clic sur la croix
closeModal.onclick = function () {
    modal.style.display = "none";
}

// Fermer au clic n'importe où sur le fond noir
modal.onclick = function (e) {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
}