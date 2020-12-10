// JavaScript Document

var knop = document.getElementById("hamburger");
var kruisje = document.querySelector("header nav form a")
var formulier = document.querySelector("form")


function hamburgerOpenen(){
  formulier.classList.add("toonmenu");
}

function hamburgerDicht(){
  formulier.classList.remove("toonmenu")
}

kruisje.addEventListener("click", hamburgerDicht);

knop.addEventListener("click", hamburgerOpenen);
