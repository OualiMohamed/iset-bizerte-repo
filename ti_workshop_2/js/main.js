/**
 * une fonction JavaScript qui calcule le double d’un nombre
 * @param - pas de paramètre
 * @returns - Pas de retour
 */
function ex1() {
  // Récupérer l'input ayant id=nb
  let myNumber = document.getElementById("nb");
  // Récupérer l'input ayant id=affichage
  let affichage = document.getElementById("affichage");
  // Récupérer la zone d'affichage ayant id=zone
  let zone = document.getElementById("zone");

  affichage.value = myNumber.value * 2;
  zone.innerHTML = myNumber.value * 2;
}

/**
 * une fonction JavaScript qui permet de saisir l’âge d’une personne et d’afficher le message correspondant
 * @param - pas de paramètre
 * @returns - Pas de retour
 */
function ex2() {
  // Récupérer l'input ayant id=age
  let myAge = document.getElementById("age");
  // Récupérer la zone d'affichage ayant id=zone
  let zone = document.getElementById("zone");

  let message = "";

  if (myAge.value <= 0) {
    message = "Ooops!! Error.";
  } else if (myAge.value <= 13) {
    message = "Vous êtes encore trop jeune.";
  } else if (myAge.value <= 18) {
    message = "Vous êtes encore mineur(e).";
  } else if (myAge.value <= 25) {
    message = "Vous êtes déjà majeur(e)";
  } else {
    message = "Ne vous vieillissez donc pas";
  }

  zone.innerHTML = message;
}

/**
 * une fonction JavaScript qui permet d'afficher le jour de la semaine d’un numéro du jour saisi au clavier. 
 * @param - pas de paramètre
 * @returns - Pas de retour
 */
function ex3() {
  let day = document.getElementById("numJ").value;

  // Affectation d'un tableau vide à une variable.
  let weekDays = new Array(); // syntaxe longue
  // La syntaxe raccourcie est : weekDays = [];

  // Affectation des valeurs au tableau.
  weekDays[0] = "Lundi";
  weekDays[1] = "Mardi";
  weekDays[2] = "Mercredi";
  weekDays[3] = "Jeudi";
  weekDays[4] = "Vendredi";
  weekDays[5] = "Samedi";
  weekDays[6] = "Dimanche";

  if (day >= 0 && day <= 7) {
    zone.innerHTML = "Le jour est : " + weekDays[day - 1];
  } else {
    zone.innerHTML = "Erreur de numéro !!";
  }
}

/**
 * une fonction JavaScript qui permet d’afficher la date d’aujourd’hui et l’heure actuelle en détail
 * @param - pas de paramètre
 * @returns - Pas de retour
 */
function ex4() {
  let zone = document.getElementById("zone");

  let myDate = new Date();

  let year = myDate.getFullYear(); // 2022
  let month = myDate.getMonth() + 1; // 3
  let day = myDate.getDate(); // 31

  zone.innerHTML = day + "/" + month + "/" + year; // 31/03/2022
}

/**
 * une fonction JavaScript qui calcule le poids idéal d'une personne
 * @param - pas de paramètre
 * @returns - Pas de retour
 */
function ex5() {
  let taille = Number(document.getElementById("taille").value);
  let age = parseInt(document.getElementById("age").value);
  let sexe = document.getElementById("sexe").value;

  let zone = document.getElementById("zone");

  let poids = 0;
  if (sexe.toLowerCase() == "homme") {
    poids = ((3 * taille - 250) * (age + 270)) / 1200;
  } else if (sexe.toLowerCase() == "femme") {
    poids = ((taille / 2 - 30) * (age + 180)) / 200;
  }

  zone.innerHTML = poids.toFixed(2) + " Kg";
}

/**
 * une fonction JavaScript qui permet de créer un objet représentant une voiture 
 * @param  -  pas de paramètre
 * @returns Object
 */
function createCarObject(marque, dateFab, dateAchat) {
    let voiture = new Object();
    voiture.marque = marque;
    voiture.dateFab = dateFab;
    voiture.dateAchat = dateAchat;
  
    return voiture;
}

/**
 * une fonction JavaScript qui permet de créer et d’afficher un objet représentant une voiture 
 * @param - pas de paramètre
 * @returns - Pas de retour
 */
function ex6() {
    let zone = document.getElementById("zone");

    let maVoiture = createCarObject("Golf", new Date("2015-06-10"), 2017);
  
    let message = "";
    // Affichage des propriétés de voiture dans la page HTML.
    message += "<strong>Informations sur la voiture :</strong>";
    message += "<ul>";
    message += "<li>Marque : " + maVoiture.marque + "</li>";
    message += "<li>Annee de fabrication : " + maVoiture.dateFab.toDateString() + "</li>";
    message += "<li>Date de l'achat : " + maVoiture.dateAchat + "</li>";
    let d = new Date();
    message +=
      "<li>Age : " +
      parseInt(d.getFullYear() - maVoiture.dateFab.getFullYear()) +
      " ans</li>";
    message += "</ul>";
  
    zone.innerHTML  = message;
  }
