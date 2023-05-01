let display = document.createElement('input');
display.className = "screen";
document.body.append(display);

let keyboard = document.createElement('div');
keyboard.id = "keyboard";
document.body.append(keyboard);

/*
document.onkeydown = function(event) {
    console.log(event);
    base.push(event.key);
    console.log(base);
};
*/



let base = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


function init() {
    let out = '';
    for (let i = 0; i < base.length; i++) {
        if (i == 13) {
            out +='<div class="btn-special" data="'+ base[i] +'">' + base[i] + '</div>';
        }
        if (i == 14 || i == 29 || i == 42 || i == 55 ) {
            out += '<div class="clearfix"></div>';
        }
        if (i !== 13) {    
            out +='<div class="btn" data="'+ base[i] +'">' + base[i] + '</div>';
        }
    }
document.querySelector('#keyboard').innerHTML = out;
}
init();



document.onkeydown = function(event) {
    document.querySelector(' #keyboard .btn-special[data="'+ event.key +'"]').classList.add('active');

    document.querySelector(' #keyboard .btn[data="'+ event.key +'"]').classList.add('active');

};


document.onkeyup = function(event) {
    document.querySelector(' #keyboard .btn[data="'+ event.key +'"]').classList.remove('active');
}





/*
let button = document.createElement('button');
button.className = "btn";
panel.appendChild(button);
button.setAttribute('content', 'content');
button.setAttribute('class', 'btn');
button.textContent = 'q';

let buttonWide = document.createElement('button');
buttonWide.className = "btn-wide";
panel.appendChild(buttonWide);
buttonWide.setAttribute('content', 'content');
buttonWide.setAttribute('class', 'btn-wide');
buttonWide.textContent = 'Backspace';

let buttonExtraWide = document.createElement('button');
buttonExtraWide.className = "btn-extra-wide";
panel.appendChild(buttonExtraWide);
buttonExtraWide.setAttribute('content', 'content');
buttonExtraWide.setAttribute('class', 'btn-extra-wide');
buttonExtraWide.textContent = '____________________';

let buttonCapitalLetters = document.createElement('button');
buttonCapitalLetters.className = "btn-wide";
panel.appendChild(buttonCapitalLetters);
buttonCapitalLetters.setAttribute('content', 'content');
buttonCapitalLetters.setAttribute('class', 'btn-wide');
buttonCapitalLetters.textContent = 'CapsLock';

*/










