"use strict"

// On cible le bouton et on l'affecte a la 
// variable btn_move
var btn_move = $('#move');

// On cible l'element .square
var square = $('.square');

// Quand on clic sur le bouton...
// btn_move.click(function(){ alert('YOP'); });
btn_move.on('click', do_on_clic);
// btn_move.on({
//     'click': do_on_clic,
//     // 'mouseover' : function(){ alert('Yep'); }
// });
function do_on_clic() {
    if ( square.css('left') == "0px" ) {
        // square.css('right', '0px');
        // square.css('left', '');
        square.css({
            left: '',
            right: '0px'
        });
    }
    else {
        // square.css('left', '0px');
        // square.css('right', '');
        square.css({
            left: '0px',
            right: ''
        });
    }
}

////

// Cibler les champs
var champ_1 = $('#champ_2');
var duplicate = $('#duplication');

// Evenement de clavier sur champ 1
// champ_1.on('keyup', do_on_keyup);
// function do_on_keyup(){
//     duplicate.val( champ_1.val() );
// }
// champ_1.on('blur', do_on_blur);
// function do_on_blur() {
//     square.html( duplicate.val() );
// }

function do_on_keyup(){
    duplicate.val( champ_1.val() );
}
function do_on_blur() {
    square.html( duplicate.val() );
    champ_1.val('');
    duplicate.val('');
}

champ_1.on({
    keyup: do_on_keyup,
    blur: do_on_blur
});
