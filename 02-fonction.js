"use strict"

// Fonctions simple

// Déclaration d'une fonction (fonction déclarative)
function ma_fnc_0 () {
    console.log("Ma fonction 0");
}

// Fonction anonyme
var ma_func_1 = function() {
    console.log("Ma fonction 1");
};

// Appel de la fonction
ma_fnc_0();
ma_func_1();


// Fonction avec paramètres d'entrés
function ma_func_2( arg_1 )
{
    console.log("Ma fonction 2 : "+ arg_1);
}
ma_func_2( "Hello World" );

// Sortie d'un fonction
function ma_func_3( arg_1 )
{
    return "Hello "+arg_1;
}
console.log( ma_func_3( "World" ) );
console.log( ma_func_3( "Bobby" ) );

// Parametre d'entré par défaut
function ma_func_4( arg_1 = "rien" ) {
    return arg_1;
}
console.log( ma_func_4() );
console.log( ma_func_4("plein de truc") );