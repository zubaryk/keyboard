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

let base = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Control', 'Meta', 'Alt'];
let specialButton =['Backspace'];

function init() {
    let out = '';
    for (let i = 0; i < base.length; i++) {
        if (i == 13 || i == 28 || i == 41 || i == 54 ) {
            out += '<div class="clearfix"></div>';
        } 
            out +='<div class="btn" data="'+ base[i] +'">' + base[i] + '</div>';
        }  
        for (let i = 0; i < specialButton.length; i++) {
            out +='<div class="btn-special" data="'+ specialButton[i] +'">' + specialButton[i] + '</div>';
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
document.onkeydown = function(event) {
    document.querySelector(' #keyboard .btn-special[data="'+ event.key +'"]').classList.add('active');
};

document.onkeyup = function(event) {
    document.querySelector(' #keyboard .btn-special[data="'+ event.key +'"]').classList.remove('active');
}














/*
document.querySelectorAll('#keyboard .btn').forEach(function(element) {
    element.onclick = function(event) {
        document.querySelectorAll('#keyboard .btn').forEach(function(element) {
            element.classList.remove('active');
        }
        )
        let mouse = this.getAttribute('data');
        this.classList.add('active');
    }
})





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










