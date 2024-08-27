document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupération des données du formulaire
    const title = document.getElementById('photo-title').value;
    const file = document.getElementById('photo-upload').files[0];
    const price = document.getElementById('photo-price').value;
    const quantity = document.getElementById('photo-quantity').value;

    // Afficher une alerte pour simuler l'ajout de la photo
    alert(`Photo ajoutée avec succès !\nTitre: ${title}\nPrix: ${price}€\nQuantité: ${quantity}`);

    // Réinitialiser le formulaire
    this.reset();
});

