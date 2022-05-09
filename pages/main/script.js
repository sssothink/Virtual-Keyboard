let container = document.createElement('div');
container.classList.add('container');
let pTitle = document.createElement('p');
let pText1 = document.createElement('p');
let pText2 = document.createElement('p');
pText1.innerHTML = ('Клавиатура создана в операционной системе Windows');
pText1.classList.add('p__text');
pText2.classList.add('p__text');


pText2.innerHTML = ('Для переключения языка сочетание клавиш: левые SHIFT(LEFT) + ALT(LEFT)');
pTitle.innerHTML = ('RSS виртуальная клавиатура');
pTitle.classList.add('p__title');
let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
let kBoard = document.createElement('div');
kBoard.classList.add('keyboard');





// title.style.color = 'red';


document.body.prepend(container);
document.querySelector('.container').append(pTitle);
document.querySelector('.container').append(textarea);
document.querySelector('.container').append(kBoard);
document.querySelector('.container').append(pText1);
document.querySelector('.container').append(pText2);






let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 8, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 18, 32, 18, 37, 40, 39, 8, 8];
// document.onkeydown = function (event) {
//     keyboard.push(event.keyCode)
//     console.log(keyboard);
// }

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        // if (i == 13) {
        //     out += '<div class="clearfix"></div>'
        // }
        if (i===13) {
            out += '<div class="k__key no__a" id="backspace" data="'+keyboard[i]+'">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===14) {
            out += '<div class="k__key no__a" id="tabLeft" data="'+keyboard[i]+'">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===28) {
            out += '<div class="k__key no__a" id="del" data="46">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===29) {
            out += '<div class="k__key no__a" id="capsLock" data="'+keyboard[i]+'">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===41) {
            out += '<div class="k__key no__a" id="enter" data="'+keyboard[i]+'">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===42) {
            out += '<div class="k__key no__a" id="shiftLeft" data="16[0]">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===53) {
            out += '<div class="k__key no__a" id="up" data="'+keyboard[i]+'">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===54) {
            out += '<div class="k__key no__a" id="shiftRight" data="16[1]">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===55) {
            out += '<div class="k__key no__a" id="ctrlLeft" data="17[0]">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===56) {
            out += '<div class="k__key no__a" id="win" data="97">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===57) {
            out += '<div class="k__key no__a" id="altLeft" data="18[0]">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===58) {
            out += '<div class="k__key no__a" id="space" data="32">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===59) {
            out += '<div class="k__key no__a" id="altRight" data="18[1]">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===60) {
            out += '<div class="k__key no__a" id="left" data="37">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===61) {
            out += '<div class="k__key no__a" id="down" data="40">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===62) {
            out += '<div class="k__key no__a" id="right" data="39">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else if (i===63) {
            out += '<div class="k__key no__a" id="ctrlRight" data="17[1]">' + String.fromCharCode(keyboard[i]) + '</div>';
        } else {
        out += '<div class="k__key" data="'+keyboard[i]+'">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    }
    document.querySelector('.keyboard').innerHTML = out;
}

init();

let backspace = document.querySelector('#backspace');
backspace.innerHTML = 'BACKSPACE'
let tabLeft = document.querySelector('#tabLeft');
tabLeft.innerHTML = 'TAB'
let del = document.querySelector('#del');
del.innerHTML = 'DEL'
let capsLock = document.querySelector('#capsLock');
capsLock.innerHTML = 'CAPS LOCK'
let enter = document.querySelector('#enter');
enter.innerHTML = 'ENTER'
let shiftLeft = document.querySelector('#shiftLeft');
shiftLeft.innerHTML = 'SHIFT'
let up = document.querySelector('#up');
up.innerHTML = '↑'
let shiftRight = document.querySelector('#shiftRight');
shiftRight.innerHTML = 'SHIFT'
let ctrlLeft = document.querySelector('#ctrlLeft');
ctrlLeft.innerHTML = 'CTRL'
let win = document.querySelector('#win');
win.innerHTML = 'WIN'
let altLeft = document.querySelector('#altLeft');
altLeft.innerHTML = 'ALT'
let space = document.querySelector('#space');
space.innerHTML = 'SPACE'
let altRight = document.querySelector('#altRight');
altRight.innerHTML = 'ALT'
let ctrlRight = document.querySelector('#ctrlRight');
ctrlRight.innerHTML = 'CTRL'
let left = document.querySelector('#left');
left.innerHTML = '←'
let down = document.querySelector('#down');
down.innerHTML = '↓'
let right = document.querySelector('#right');
right.innerHTML = '→';




let btn = document.querySelectorAll('.k__key');

for (let i = 0; i<btn.length; i++) {
    btn[i].addEventListener('mousedown', (event) => {
        btn[i].classList.add('active');
    });
    btn[i].addEventListener('keydown', () => {
        btn[i].classList.add('active');
    });
    document.addEventListener('mouseup', () => {
        btn[i].classList.remove('active');
    })
    document.addEventListener('keyup', () => {
        btn[i].classList.remove('active');
    })


    if (i===13) {
        btn[i].addEventListener('mousedown', () => {
            textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        });
    } 
    // else if (i===13) {
    //     btn[i].addEventListener('mousedown', () => {
    //         textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    //     });
    // } 
    else {
        btn[i].addEventListener('mousedown', () => {
            textarea.value += btn[i].innerHTML;
        });
    }


}
// btn.addEventListener('mouseup', () => {
//     btn.classList.remove('active');
// })

document.addEventListener('keydown', () => { 
    textarea.focus(textarea)
});


    let flag = false;
document.onkeydown = (event) => {
    // console.log(event.code); // keyA
    // console.log(event); // 97

    if (event.code == 'ShiftLeft') flag = true;
    if (event.code == 'AltLeft' && flag) {
        flag = false;
        alert('Shasha LOH')
    }
    
    
    
    // {
    //     document.onkeyup = (event) => {
    //         if (event.code = 'AltLeft'){
    //             console.log('саша лох');
    //         } else {
    //             document.onkeyup = null;
    //         }
    //     }
    // }
    if (event.code == 'ControlLeft') {
        document.querySelector('.keyboard .k__key[data="17[0]"]').classList.add('active');
    } else if (event.code == 'ShiftLeft') {
        document.querySelector('.keyboard .k__key[data="16[0]"]').classList.add('active');
    } else if (event.code == 'AltLeft') {
        document.querySelector('.keyboard .k__key[data="18[0]"]').classList.add('active');
    } else if (event.code == 'ControlRight') {
        document.querySelector('.keyboard .k__key[data="17[1]"]').classList.add('active');
    } else if (event.code == 'AltRight') {
        document.querySelector('.keyboard .k__key[data="18[1]"]').classList.add('active');
    } else if (event.code == 'ShiftRight') {
        document.querySelector('.keyboard .k__key[data="16[1]"]').classList.add('active');
    } else {
        document.querySelector('.keyboard .k__key[data="'+event.keyCode+'"]').classList.add('active');
    }

}
document.onkeyup = (event) => {
    // console.log(event.code); // keyA
    // console.log(event.keyCode); // 97
    if (event.code == 'ControlLeft') {
        document.querySelector('.keyboard .k__key[data="17[0]"]').classList.remove('active');
    } else if (event.code == 'AltLeft') {
        document.querySelector('.keyboard .k__key[data="18[0]"]').classList.remove('active');
    } else if (event.code == 'ShiftLeft') {
        document.querySelector('.keyboard .k__key[data="16[0]"]').classList.remove('active');
    } else if (event.code == 'ControlRight') {
        document.querySelector('.keyboard .k__key[data="17[1]"]').classList.remove('active');
    } else if (event.code == 'AltRight') {
        document.querySelector('.keyboard .k__key[data="18[1]"]').classList.remove('active');
    } else if (event.code == 'ShiftRight') {
        document.querySelector('.keyboard .k__key[data="16[1]"]').classList.remove('active');
    } else {
        document.querySelector('.keyboard .k__key[data="'+event.keyCode+'"]').classList.remove('active');
    }
}

