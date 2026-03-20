document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // Ferme les autres questions si nécessaire (optionnel)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        // Bascule la question actuelle
        faqItem.classList.toggle('active');
    });
});