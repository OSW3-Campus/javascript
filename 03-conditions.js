var a = true;
var b = false;
var c = 42;
var d = 0;

// Condition IF
// Est ce que A est vrai ?
if (a) {
    console.log("A est vrai !");
}

// Est ce que B est vrai ?
if (b) {
    console.log("B est vrai !");
}

// Est ce que B N'EST PAS vari ?
if (!b) {
    console.log("B n'est pas vrai !");
}

// Est ce que C est vrai ?
if (c) {
    console.log("C est vrai !");
}

// Est ce que D est vrai ?
if (d) {
    console.log("D est vrai !");
}


// Condition IF ELSE
// Est ce A est vrai ... Sinon ...
if (a) {
    console.log("A est vrai !");
} else {
    console.log("A n'est pas vrai !");
}

// Est ce B est vrai ... Sinon ...
if (b) {
    console.log("B est vrai !");
} else {
    console.log("B n'est pas vrai !");
}

// Condition IF .. ELSE IF 
if (!b) {
    console.log("B n'est pas vrai !");
}
else if (c > 10) {
    console.log("C est inférieur à 10 !");
}

// Condition IF .. ELSE IF ... ELSE
if (b) {
    console.log("B est vrai !");
}
else if (c < 10) {
    console.log("C est inférieur à 10 !");
} else {
    console.log("Aucune des conditions n'est réalisée.");
}


// Opérateur ternaire
console.log( a ? "Yep" : "Nop");

var e = c > 10 ? "C +" : "C -";
console.log(e);


console.log( d || 123 );


function test( arg ) {
    // var argument = arg;
    var argument = arg || 567;

    console.log(argument);
}
test();

// revoir modulo