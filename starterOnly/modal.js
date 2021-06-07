function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";        //pour afficher une div
                                          //on modifie la propriété CSS display de l'élément
}


const closeModal = document.querySelectorAll(".close");

// close modal event
closeModal.forEach((btn) => btn.addEventListener("click", modalClosed));

// close modal function
function modalClosed() {
  modalbg.style.display = "none";
}



const firstNameCheck = document.getElementById("first");
const lastNameCheck = document.getElementById("last");
const emailCheck = document.getElementById("email");
const birthdateCheck = document.getElementById("birthdate");
const quantityCheck = document.getElementById("quantity");


//form verification 
//keep data after submit

const formValidate = document.getElementById("formSubmit");

formValidate.addEventListener('submit', validate);

function validate(event){
  event.preventDefault();              //prévenir l'envoi du formulaire mal rempli
  firstNameValidation();
  lastNameValidation();
  checkEmail();
  contestNumberCheck();
  locationCheck();
  checkboxCheck();
  birthCheck(); 

}




//first and last name verification

function firstNameValidation(){
  if (firstNameCheck.value.length > 2){
    document.getElementById('firstNameError').innerHTML = '';
    return true
  } else {
      document.getElementById('firstNameError').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
      document.getElementById('firstNameError').style.color = "red";
      document.getElementById('firstNameError').style.fontSize = "13px";
      return false
  }
}

function lastNameValidation(){
  if (lastNameCheck.value.length > 2){
    document.getElementById('lastNameError').innerHTML = ' ';
    return true
  } else  {
      document.getElementById('lastNameError').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
      document.getElementById('lastNameError').style.color = "red";
      document.getElementById('lastNameError').style.fontSize = "13px";
      return false
    }
}


//Email verification

function checkEmail(){
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    

  if (regex.test(emailCheck.value)){
    document.getElementById('emailError').innerHTML = ' ';
    return true
  } else {
    document.getElementById('emailError').innerHTML = 'Adresse mail non valide';
    document.getElementById('emailError').style.color = "red";
    document.getElementById('emailError').style.fontSize = "13px";
    return false
  }

}

//Birthdate verification

function birthCheck(){
  if (birthdateCheck.value == ""){
    document.getElementById('birthdateError').innerHTML = 'Vous devez entrer votre date de naissance';
    document.getElementById('birthdateError').style.color = "red";
    document.getElementById('birthdateError').style.fontSize = "13px";
    return false;
  }else {
    document.getElementById('birthdateError').innerHTML = '';
    return true;
  }
}


//contest number verification

function contestNumberCheck(){
  if (quantityCheck.value > 0){
    document.getElementById('quantityError').innerHTML = ' ';
    return true
  }else{
    document.getElementById('quantityError').innerHTML = 'Veuillez entrer un nombre valide';
    document.getElementById('quantityError').style.color = "red";
    document.getElementById('quantityError').style.fontSize = "13px";
    return false;
  }
}


//un bouton radio est sélectionnée

const radios = document.querySelectorAll(".checkbox-input[type=radio]");

function locationCheck(){
  let radios = document.querySelectorAll(".checkbox-input[type=radio]");
  for(let radio of radios){
    if(radio.checked){
    document.getElementById('radioError').innerHTML = ' ';
    return true;
  }
}
  document.getElementById('radioError').innerHTML = 'Vous devez choisir une ville';
  document.getElementById('radioError').style.color = "red";
  document.getElementById('radioError').style.fontSize = "13px";
  return false;
}

//la case des conditions d'utilisation est cochée

const checkboxCondition = document.getElementById('checkbox1');

function checkboxCheck(){
  let checkboxCondition = document.getElementById('checkbox1');
  if (!checkboxCondition.checked){
    document.getElementById('checkboxError').innerHTML = 'Veuillez accepter les conditions';
    document.getElementById('checkboxError').style.color = "red";
    document.getElementById('checkboxError').style.fontSize = "13px";
    document.getElementById('checkboxError').style.display = "block";
;    return false
  }
  else {
    document.getElementById('checkboxError').innerHTML = ' ';
    return true;
  }
  
}



const formConfirmationTest = document.getElementById("form");
formConfirmationTest.addEventListener('click', modalCloseConfirmation);


function modalCloseConfirmation(){
  if(
    (firstNameValidation()) && (lastNameValidation()) && (checkEmail()) && (contestNumberCheck()) && (locationCheck()) && (checkboxCheck()) && (birthCheck())
  )
    {
      modalbg.style.display = "none";
      document.getElementById("confirm-bground").style.display = "block";
    }

}
