let display = document.createElement('input');
display.className = "screen";
document.body.append(display);

let keyboard = document.createElement('div');
keyboard.id = "keyboard";
document.body.append(keyboard);


let base = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];


function init() {
    let out = '';
    for (let i = 0; i < base.length; i++) {
        if (i == 12 || i == 23) {
            out += '<div class="clearfix"></div>';
        }    
        out +='<div class="btn" data="'+ base[i] +'">' + base[i] + '</div>';
    }
document.querySelector('#keyboard').innerHTML = out;
}
init();

document.onkeydown = function(event) {
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










