const display = document.getElementById('screen');
// zero
const zero = document.getElementById('zero').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText += '';
    } else {
        display.innerText += 0;
    }
});
// one
const one = document.getElementById('one').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +1;
    } else {
        display.innerText += 1;
    }
});
// two
const two = document.getElementById('two').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +2;
    } else {
        display.innerText += 2;
    }
});
// three
const three = document.getElementById('three').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +3;
    } else {
        display.innerText += 3;
    }
});
// four
const four = document.getElementById('four').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +4;
    } else {
        display.innerText += 4;
    }
});
// five
const five = document.getElementById('five').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +5;
    } else {
        display.innerText += 5;
    }
});
// six
const six = document.getElementById('six').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +6;
    } else {
        display.innerText += 6;
    }
});

// seven
const seven = document.getElementById('seven').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +7;
    } else {
        display.innerText += 7;
    }
});

// eight
const eight = document.getElementById('eight').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +8;
    } else {
        display.innerText += 8;
    }
});

// nine
const nine = document.getElementById('nine').addEventListener('click', () => {
    if (display.innerHTML === '0' || display.innerHTML === 0) {
        display.innerText = +9;
    } else {
        display.innerText += 9;
    }
});
// point
const point = document.getElementById('point').addEventListener('click', () => {
    if (display.innerHTML == '') {
        display.innerText += '0.';
    } else {
        display.innerText += '.';
    }
});

// clear
const clear = document.getElementById('C').addEventListener('click', () => {
    display.innerText = '';
});

//backspace
const del = document.getElementById('del').addEventListener('click', () => {
    const value = display.innerText;
    display.innerText = display.innerText.slice(0, display.innerText.length - 1)
});