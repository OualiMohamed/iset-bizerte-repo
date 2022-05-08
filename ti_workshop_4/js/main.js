/*************************************************************************************************/
/******************************************** DONNEES ********************************************/
/*************************************************************************************************/

// Récupérer les images
const photos = document.querySelectorAll(".photo-list li");

// Récupérer la balise em (nombre des photos sélectionnées)
const total = document.querySelector("#total em");

/*************************************************************************************************/
/******************************************* FONCTIONS *******************************************/
/*************************************************************************************************/

function onClickSelectPhoto() {
  // On applique la classe selected à l'élément sélectionné
  this.classList.toggle("selected");

  // On recherche toutes les balises <li> ayant une classe .selected
  let selectedPhotos = document.querySelectorAll(".photo-list li.selected");

  // Mise à jour des nombres de photos sélectionnées
  total.textContent = selectedPhotos.length;
}

function onClickValiderPhotos(e) {
  // On recherche toutes les balises <li> ayant une classe .selected
  let selectedPhotos = document.querySelectorAll(".photo-list  li.selected");

  // On accède à la zone d'affichage
  let zone = document.querySelector("#affichage");

  // Vider la sélection
  zone.innerHTML = "";
  if (selectedPhotos.length > 0) {
    // On ajouter les images sélectionnés à la zone d'affichage
    for (let i = 0; i < selectedPhotos.length; i++) {
      zone.innerHTML += selectedPhotos[i].innerHTML;
    }
  } else {
    zone.innerHTML = '<p class="lead text-muted">Aucune photo validée !</p>';
  }

  e.preventDefault();
}
/*************************************************************************************************/
/**************************************** CODE PRINCIPAL *****************************************/
/*************************************************************************************************/
// Installation d'un gestionnaire d'évènement click sur toutes les balises <li>
for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener("click", onClickSelectPhoto);
}

// Installation d'un gestionnaire d'évènement clic sur le bouton Valider
btnValider.addEventListener("click", onClickValiderPhotos);
