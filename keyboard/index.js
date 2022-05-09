let input = document.createElement('input');
input.className = "screen";
document.body.append(input);

let div = document.createElement('div');
div.id = "base";
document.body.append(div);

const base = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191];

/*
document.onkeydown = function(event) {
    //console.log(event);
    base.push(event.keyCode);
    console.log(base);
};
*/

function init() {
    let out = '';
    for (let i = 0; i < base.length; i++) {
        out +='<div class="style-key" data=" '+base[i] +' ">' + String.fromCharCode(base[i]) + '</div>';
    }
    document.querySelector('#base').innerHTML = out;
}
init();

document.onkeydown = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('#base .style-key').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelector('#base .style-key[data=" '+ event.keyCode + ' "]').classList.add('active');
};

document.querySelectorAll('#base .style-key').forEach(function(element) {
    element.onclick = function(event) {
        document.querySelectorAll('#base .style-key').forEach(function(element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
    }
    });

