document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contactForm");
    const successMessage = document.querySelector("#successMessage");
    const errorMessage = document.querySelector("#errorMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const message = contactForm.querySelector("#message").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Vérification des champs
        if (!name || !email || !message) {
            alert("Veuillez remplir tous les champs.");
            errorMessage.textContent = "Tous les champs sont requis.";
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse email valide.");
            errorMessage.textContent = "Adresse email invalide.";
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            return;
        }

        // Si tout est correct
        alert("Merci pour votre message ! Nous reviendrons vers vous rapidement.");
        successMessage.textContent = "Votre message a été envoyé avec succès.";
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Réinitialisation du formulaire
        contactForm.reset();
    });
});
