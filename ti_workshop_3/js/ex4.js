function verif_ncin(ncin) {
  let verif = true;
  let taille = ncin.length;
  // Méthode 1
  // for(let i=0; i<taille; ++i) {
  //     if ((ncin.charAt(i) < "0") || (ncin.charAt(i) > "9") || (taille!=8))
  //         verif = false;
  // }

  // Méthode 2
  // let rule = /^[0-9]+$/;
  // if (!rule.test(ncin) || taille != 8) {
  //     verif = false;
  // }

  // Méthode 3
  let rule = /^\d{8}$/;
  if (!rule.test(ncin)) {
    verif = false;
  }

  return verif;
}

function verif_email(email) {
  let verif = true;

  //   let rule =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!rule.test(email)) {
    verif = false;
  }

  return verif;
}

function verif() {
  let errZone = document.getElementById("error");
  let nom = document.getElementById("nom").value;
  let ncin = document.getElementById("ncin").value;
  let email = document.getElementById("email").value;
  let modules = document.getElementById("modules");

  let valid = true;
  let errorMessage = "";

  // Validation du nom
  if (nom.length <= 0) {
    errorMessage += "<p>Veuillez taper votre nom et prénom!</p>";
    errZone.style.display = "block";
    valid = false;
  } else if (nom.length <= 5) {
    errorMessage += "<p>Veuillez taper plus de 5 caractères</p>";
    errZone.style.display = "block";
    valid = false;
  }

  // Validation du NCIN
  if (ncin.length <= 0) {
    errorMessage += "<p>Veuillez taper votre NCIN!</p>";
    errZone.style.display = "block";
    valid = false;
  } else if (!verif_ncin(ncin)) {
    errorMessage += "<p>Le numéro de votre CIN est incorrect!</p>";
    errZone.style.display = "block";
    valid = false;
  }

  // Validation de l'email
  if (email.length <= 0) {
    errorMessage += "<p>Veuillez taper votre adresse e-mail!</p>";
    errZone.style.display = "block";
    valid = false;
    //   } else if (email.indexOf('@') == -1) {  // méthode 1
  } else if (!verif_email(email)) {
    // méthode 2
    errorMessage += "<p>Adresse e-mail incorrecte!</p>";
    errZone.style.display = "block";
    valid = false;
  }

  // Validation Modules de formation (MULTI SELECT)
  //Déterminer le nombre de modules sélectionnés
  let selectedModules = 0;
  for (let i = 0; i < modules.length; i++) {
    if (modules[i].selected) {
      selectedModules += 1;
    }
  }
  // Vérifier qu'on ne peut choisir qu'au maximum 2 modules
  if (selectedModules == 0) {
    errorMessage += "<p>Veuillez choisir un module de formation!</p>";
    errZone.style.display = "block";
    valid = false;
  } else if (selectedModules > 2) {
    errorMessage += "<p>Veuillez sélectionner au maximum 2 choix!</p>";
    errZone.style.display = "block";
    valid = false;
  }

  if (valid) {
    alert("Inscription Valide");
    window.location.href = "http://www.isetbz.rnu.tn/";
    return false;
  } else {
    errZone.innerHTML = errorMessage;
  }

  return valid;
}

function effacer() {
  let errZone = document.getElementById("error");
  errZone.style.display = "none";

  document.getElementById('niveau1').setAttribute('checked', 'checked');
}

// Le niveau secondaire est sélectionné par défaut
document.getElementById("niveau1").checked = true;
