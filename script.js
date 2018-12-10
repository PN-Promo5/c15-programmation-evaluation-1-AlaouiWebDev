//ex1


let container = document.createElement("div");
document.body.appendChild(container);
let p = document.createElement("p");
container.appendChild(p);


let label = document.createElement("label");
container.appendChild(label);
label.textContent = "Quel est votre prénom ?";
container.appendChild(document.createElement("br"));
let text = document.createElement("input");
text.type = "text";
container.appendChild(text);


let label2 = document.createElement("label");
container.appendChild(label2);
label2.textContent = "Quel est votre nom ?";
container.appendChild(document.createElement("br"));
let text2 = document.createElement("input");
text2.type = "text";
container.appendChild(text2);


let btnContinue = document.createElement("input");
container.appendChild(btnContinue);
btnContinue.type = "submit";
btnContinue.value = "Ok"


//Message erreur
let labelerreur = document.createElement("label");
labelerreur.textContent = "Veuillez remplir le champs texte ";
labelerreur.style.color = "red";
container.appendChild(labelerreur);
labelerreur.hidden = true;


btnContinue.addEventListener("click", msgerreur, false);

function msgerreur() {
  //verifie si aucuns champs est remplis
  if (text.checked == false && text2.checked == false ) {
    labelerreur.hidden = false;
  }
  // affiche le container
  else {
    container.hidden = true

    //verifie si les champs textes sont remplis
    if (text.checked == true)

    if (text2.checked == true)


    //affiche la concaténation du prénom et du nom
    p.textContent = "Bonjour " + text + text2 + " !";
  }
}


//ex 2

let label = document.createElement("label");
label.textContent = "Salaire mensuel brut";
let number = document.createElement("input");
text.type = "number";

let label2 = document.createElement("label");
label2.textContent = "Salaire mensuel net";
let number = document.createElement("input");
text.type = "number";


//ex 5
function randomNumber() {
let number = [];
let number = document.getElementById('number')
//Déclaration de fonction renvoi un nb entre 0 et un max aléatoirement
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(128));
}
//Générer et stocker un nombre aléatoire
let random = number[getRandomInt(number.length)]
//Affichage
lettre.textContent = random
}
