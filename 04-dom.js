"use strict"

// On cible le bouton et on l'affecte a la 
// variable btn_move
var btn_move = document.getElementById('move');

// On cible l'element .square
var square = document.getElementsByClassName('square')[0];

// Quand on clic sur le bouton...
// btn_move.addEventListener('click', function(){
//     //....
// });
btn_move.addEventListener('click', do_on_click);
function do_on_click() {

    if(square.style.right.length == 0) {
        square.style.right = "0px";
    }
    else {
        square.style.left = "0px";
    }
}

////

// Cibler les champs
var champ_1 = document.getElementById('champ_2');
var duplicate = document.getElementById('duplication');

// Evenement de clavier sur champ 1
champ_1.addEventListener('keyup', function() {
    // recup la valeur du champ
    duplicate.value = champ_1.value;
});

champ_1.addEventListener('blur', function(){
    square.innerHTML = duplicate.value;
});