const ROW1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const ROW1_VALUE_DOWN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const ROW1_VALUE_UP = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const ROW1_VALUE_DOWN_RUS = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const ROW1_VALUE_UP_RUS = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];

const ROW2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
const ROW2_VALUE_DOWN = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Delete'];
const ROW2_VALUE_UP = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', "|", 'Delete'];
const ROW2_VALUE_DOWN_RUS = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Delete'];
const ROW2_VALUE_UP_RUS = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "/", 'Delete'];

const ROW3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const ROW3_VALUE_DOWN = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const ROW3_VALUE_UP = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const ROW3_VALUE_DOWN_RUS = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'];
const ROW3_VALUE_UP_RUS = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];

const ROW4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const ROW4_VALUE_DOWN = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ",", ".", '/', "▲", 'Shift'];
const ROW4_VALUE_UP = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ",", ".", '?', "▲", 'Shift'];
const ROW4_VALUE_DOWN_RUS = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', "б", "ю", '.', "▲", 'Shift'];
const ROW4_VALUE_UP_RUS = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', "Б", "Ю", ',', "▲", 'Shift'];

const ROW5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const ROW5_VALUE_DOWN = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];
const ROW5_VALUE_UP = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];

let area = document.createElement('textarea');
area.id = 'area';
area.rows = '15';
area.cols = '86';
document.body.append(area);

let wrapper = document.createElement('div');
wrapper.classList.add("keyboard-body", "keyboard");
wrapper.id = "keyboard";
document.body.append(wrapper);

let info = document.createElement('div');
info.classList.add("info");
info.innerHTML = 'Смена языка ShiftLeft + AltLeft  WINDOWS';
wrapper.append(info);

let row1 = document.createElement('div');
row1.classList.add("keyboard-row", "row");
wrapper.append(row1);


for (let i = 0; i < ROW1.length; i++) {


    let divs = document.createElement('div');
    divs.classList.add("keyboard-key", "key", ROW1[i]);
    divs.innerHTML = '<span class="eng"><span class="CaseDown">' + ROW1_VALUE_DOWN[i] + '</span><span class="CaseUp hidden">' + ROW1_VALUE_UP[i] +
        '</span></span><span class="rus hidden"><span class="CaseDown">' + ROW1_VALUE_DOWN_RUS[i] + '</span><span class="CaseUp hidden">' + ROW1_VALUE_UP_RUS[i] + '</span></span></span>';
    row1.append(divs);

}
let row2 = document.createElement('div');
row2.classList.add("keyboard-row", "row");
wrapper.append(row2);

for (let i = 0; i < ROW2.length; i++) {


    let divs = document.createElement('div');
    divs.classList.add("keyboard-key", "key", ROW2[i]);
    divs.innerHTML = '<span class="eng"><span class="CaseDown">' + ROW2_VALUE_DOWN[i] + '</span><span class="CaseUp hidden">' + ROW2_VALUE_UP[i] +
        '</span></span></span><span class="rus hidden"><span class="CaseDown">' + ROW2_VALUE_DOWN_RUS[i] + '</span><span class="CaseUp hidden">' + ROW2_VALUE_UP_RUS[i] + '</span></span></span>'
    row2.append(divs);

}

let row3 = document.createElement('div');
row3.classList.add("keyboard-row", "row");
wrapper.append(row3);

for (let i = 0; i < ROW3.length; i++) {


    let divs = document.createElement('div');
    divs.classList.add("keyboard-key", "key", ROW3[i]);
    divs.innerHTML = '<span class="eng"><span class="CaseDown">' + ROW3_VALUE_DOWN[i] + '</span><span class="CaseUp hidden">' + ROW3_VALUE_UP[i] +
        '</span></span></span><span class="rus hidden"><span class="CaseDown">' + ROW3_VALUE_DOWN_RUS[i] + '</span><span class="CaseUp hidden">' + ROW3_VALUE_UP_RUS[i] + '</span></span></span>'
    row3.append(divs);

}


let row4 = document.createElement('div');
row4.classList.add("keyboard-row", "row");
wrapper.append(row4);

for (let i = 0; i < ROW4.length; i++) {


    let divs = document.createElement('div');
    divs.classList.add("keyboard-key", "key", ROW4[i]);
    divs.innerHTML = '<span class="eng"><span class="CaseDown">' + ROW4_VALUE_DOWN[i] + '</span><span class="CaseUp hidden">' + ROW4_VALUE_UP[i] +
        '</span></span></span><span class="rus hidden"><span class="CaseDown">' + ROW4_VALUE_DOWN_RUS[i] + '</span><span class="CaseUp hidden">' + ROW4_VALUE_UP_RUS[i] + '</span></span></span>'
    row4.append(divs);

}

let row5 = document.createElement('div');
row5.classList.add("keyboard-row", "row");
wrapper.append(row5);

for (let i = 0; i < ROW5.length; i++) {


    let divs = document.createElement('div');
    divs.classList.add("keyboard-key", "key", ROW5[i]);
    divs.innerHTML = '<span class="eng"><span class="CaseDown">' + ROW5_VALUE_DOWN[i] + '</span><span class="CaseUp hidden">' + ROW5_VALUE_UP[i] +
        '</span></span></span><span class="rus hidden"><span class="CaseDown">' + ROW5_VALUE_DOWN[i] + '</span><span class="CaseUp hidden">' + ROW5_VALUE_UP[i] + '</span></span></span>'
    row5.append(divs);

}

document.addEventListener('keydown', function(event) {

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {


        document.querySelectorAll('.CaseUp').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.CaseDown').forEach(elem => elem.classList.add('hidden'));

    }
});
document.addEventListener('keyup', function(event) {

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {

        document.querySelectorAll('.CaseDown').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.CaseUp').forEach(elem => elem.classList.add('hidden'));
    }
});
let caps = true;
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    let text_focus = document.querySelector('#area:focus');

    if (document.getElementsByClassName(event.code)) {

        if (event.key == 'Backspace') {
            if (text_focus) return;
            area.value = area.value.substring(0, area.value.length - 1);

        }
        if (document.querySelector('.' + event.code).outerText.length == 1) {
            area.value += document.querySelector('.' + event.code).outerText;
        }
        if (event.code == 'Enter') {

            if (!text_focus) {
                area.value = area.value + '\r\n';
            }

        }
        if (event.code == 'Tab') {


            event.preventDefault();
            area.value += '    ';

        }
        if (event.code == 'CapsLock') {

            if (caps) {

                document.querySelector('.CapsLock').classList.add('active');
                document.querySelectorAll('.CaseUp').forEach(el => el.classList.remove('hidden'));
                document.querySelectorAll('.CaseDown').forEach(elem => elem.classList.add('hidden'));

                caps = false;

            } else {
                caps = true;
                document.querySelector('.CapsLock').classList.remove('active');
                document.querySelectorAll('.CaseDown').forEach(el => el.classList.remove('hidden'));
                document.querySelectorAll('.CaseUp').forEach(elem => elem.classList.add('hidden'));
            }
        }
        if (event.code == 'CapsLock') return;
        document.querySelector('.' + event.code).classList.add('active');
    }

});

document.addEventListener('keyup', function(event) {

    if (event.code == 'CapsLock') return;
    document.querySelector('.' + event.code).classList.remove('active');

});

document.addEventListener('mousedown', function(event) {

    if (event.target.classList[2] == 'ShiftLeft' || event.target.classList[2] == 'ShiftRight') {

        document.querySelector('.' + event.target.classList[2]).classList.add('active');
        document.querySelectorAll('.CaseUp').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.CaseDown').forEach(elem => elem.classList.add('hidden'));

    }
});
document.addEventListener('mouseup', function(event) {

    if (event.target.classList[2] == 'ShiftLeft' || event.target.classList[2] == 'ShiftRight') {

        document.querySelectorAll('.CaseDown').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.CaseUp').forEach(elem => elem.classList.add('hidden'));
    }
});

document.addEventListener('mousedown', function(event) {
    let text_focus = document.querySelector('#area:focus');


    if (document.querySelector('.' + event.target.classList[2])) {
        if (event.target.outerText !== 'CapsLock') {

            document.querySelector('.' + event.target.classList[2]).classList.add('active');

        }
    } else {
        if (event.target.parentElement.parentElement.outerText !== 'CapsLock') {
            document.querySelector('.' + event.target.parentElement.parentElement.classList[2]).classList.add('active');
        }
    }


    if (event.target.classList[2] == 'Backspace' || event.target.parentElement.parentElement.classList[2] == 'Backspace') {
        if (text_focus) return;
        area.value = area.value.substring(0, area.value.length - 1);
    }
    if (text_focus) {
        area.value = area.value.substring(0, area.value.length - 1);

    }
    if (event.target.classList[2] == 'Enter' || event.target.parentElement.parentElement.classList[2] == 'Enter') {

        if (!text_focus) {
            area.value = area.value + '\r\n';
        }
    }
    if (event.target.classList[2] == 'Tab' || event.target.parentElement.parentElement.classList[2] == 'Tab') {

        if (text_focus) {
            event.preventDefault();
            area.value += '    ';
        } else {

            area.value += '    ';
        }
    }
    if (event.target.classList[2] == 'CapsLock' || event.target.parentElement.parentElement.classList[2] == 'CapsLock') {

        if (caps) {

            document.querySelector('.CapsLock').classList.add('active');
            document.querySelectorAll('.CaseUp').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('.CaseDown').forEach(elem => elem.classList.add('hidden'));
            caps = false;

        } else {
            caps = true;
            document.querySelector('.CapsLock').classList.remove('active');
            document.querySelectorAll('.CaseDown').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('.CaseUp').forEach(elem => elem.classList.add('hidden'));
        }
    }
    if (event.target.classList[2] == 'CapsLock' || event.target.parentElement.parentElement.classList[2] == 'CapsLock') return;

    if (event.target.tagName == 'SPAN' && event.target.parentElement.parentElement.outerText.length == 1) {
        area.value += event.target.parentElement.parentElement.outerText;

    } else {

        if (event.target.classList.contains('key') && event.target.outerText.length == 1) {

            area.value += event.target.outerText;
        }
    }
    document.addEventListener('mouseup', function(event) {
        if (event.target.outerText !== 'CapsLock' || event.target.parentElement.parentElement.outerText !== 'CapsLock') {
            if (document.querySelector('.' + event.target.classList[2])) {

                document.querySelector('.' + event.target.classList[2]).classList.remove('active');
            } else {
                document.querySelector('.' + event.target.parentElement.parentElement.classList[2]).classList.remove('active');
            }
        }
    });
});
localStorage.setItem('lang', true);

function runRusKeys(func, ...codes) {
    let pressed = new Set();
    let a = true;

    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        if (localStorage.getItem('lang')) {
            localStorage.setItem('lang', true);
            document.querySelectorAll('.rus').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('.eng').forEach(elem => elem.classList.add('hidden'));
            Eng = false;
            pressed.clear();

            func();
            localStorage.setItem('lang', false);
        } else {

            document.querySelectorAll('.rus').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.eng').forEach(elem => elem.classList.remove('hidden'));

            localStorage.setItem('lang', true);
            Eng = true;
        }
        console.log(localStorage.getItem('lang'));
    });
    document.addEventListener('keyup', function(event) {

        pressed.delete(event.code);

    });
}
runRusKeys(
    function() {

    },
    "ShiftLeft",
    "AltLeft"
);