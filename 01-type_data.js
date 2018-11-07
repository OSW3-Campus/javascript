function log(label, data) {
    console.log(label+" : "+data+" ("+typeof(data)+")");
}

// Type Undefined
var type_undefined_0;
var type_undefined_1 = undefined;

log("Type Undefined 0", type_undefined_0);
log("Type Undefined 1", type_undefined_1);

// Type Nombre
var type_number_0 = 42;
var type_number_1 = .3;
var type_number_2 = 2.5;

log("Type Nombre 0", type_number_0);
log("Type Nombre 1", type_number_1);
log("Type Nombre 2", type_number_2);

// Type chaine
var type_chaine_0 = "Hello";
var type_chaine_1 = 'World';

log("Type chaine 0", type_chaine_0);
log("Type chaine 1", type_chaine_1);

// Type NULL
var type_null = null;
log("Type null", type_null);

// Type Objet
var type_object_0 = {};
var type_object_1 = new Object();

log("Type Objet 0", type_object_0);
log("Type Objet 1", type_object_1);

// Type Tableau
var type_array_0 = [];
var type_array_1 = new Array();
var type_array_2 = new Array(5);

log("Type Tableau 0", type_array_0);
log("Type Tableau 1", type_array_1);
log("Type Tableau 2", type_array_2);

// Type Booléen
var type_boolean_0 = true;
var type_boolean_1 = false;
log("Type Booléen 0", type_boolean_0);
log("Type Booléen 1", type_boolean_1);

// Type Fonction
log("Type Function", log);