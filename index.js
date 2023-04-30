let display = document.createElement('input');
display.className = "screen";
document.body.append(display);

let keyboard = document.createElement('div');
keyboard.id = "keyboard";
document.body.append(keyboard);

let base = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'A', 'S', 'D', 'F', 'G', 'H', 
              'J', 'K', 'L', ';',
              '"', 'Z', 'X', 'C', 
              'V', 'B', 'N', 'M', '<',
              '>', '/'];

function init() {
    let out = '';
    for (let i = 0; i < base.length; i++) {
        out +='<div class="btn" data=" '+base[i] +' ">' + base[i] + '</div>';
    }
document.querySelector('#keyboard').innerHTML = out;
}
init();

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










