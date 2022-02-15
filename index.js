const display = document.getElementById('screen');
// const hDisplay = document.getElementById('h_screen');
// let x = 0;
// let y = 0;
// var opr = '';
// // zero
// const zero = document.getElementById('zero').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText += '';
//     } else {
//         display.innerText += 0;
//     }
// });
// // one
// const one = document.getElementById('one').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +1;
//     } else {
//         display.innerText += 1;
//     }
// });
// // two
// const two = document.getElementById('two').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +2;
//     } else {
//         display.innerText += 2;
//     }
// });
// // three
// const three = document.getElementById('three').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +3;
//     } else {
//         display.innerText += 3;
//     }
// });
// // four
// const four = document.getElementById('four').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +4;
//     } else {
//         display.innerText += 4;
//     }
// });
// // five
// const five = document.getElementById('five').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +5;
//     } else {
//         display.innerText += 5;
//     }
// });
// // six
// const six = document.getElementById('six').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +6;
//     } else {
//         display.innerText += 6;
//     }
// });

// // seven
// const seven = document.getElementById('seven').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +7;
//     } else {
//         display.innerText += 7;
//     }
// });

// // eight
// const eight = document.getElementById('eight').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         display.innerText = +8;
//     } else {
//         display.innerText += 8;
//     }
// });

// // nine
// const nine = document.getElementById('nine').addEventListener('click', () => {
//     if (display.innerHTML === '0' || display.innerHTML === 0) {
//         parseInt(display.innerText = +9);
//     } else {
//         parseInt(display.innerText += 9);
//     }
//     console.log(typeof(display.innerText))
// });
// // point
// const point = document.getElementById('point').addEventListener('click', () => {
//     if (display.innerHTML == '') {
//         display.innerText += '0.';
//     } else {
//         display.innerText += '.';
//     }
// });

// // clear
// const clear = document.getElementById('C').addEventListener('click', () => {
//     display.innerText = '';
//     hDisplay.innerText = '';
// });

// //backspace
// const del = document.getElementById('del').addEventListener('click', () => {
//     const value = display.innerText;
//     display.innerText = display.innerText.slice(0, display.innerText.length - 1)
// });

// // +
// const plus = document.getElementById('plus').addEventListener('click', () => {
//     opr = '+';
//     if (display.innerHTML === '') {
//         display.value = x;
//     } else {
//         x = display.innerHTML;

//     }
//     parseInt(x);
//     console.log(x, typeof(x))
// });

// // =
// const equal = document.getElementById('result').addEventListener('click', () => {
//     y = display.innerText;
//     hDisplay.innerHTML += opr + y;
// });

var x = 0;
var y = 0
var opr = 0;
var num = 0;
var res = 0;

function number(num) {
    if (opr != 0 && opr != '^2' && opr != '1/x' && opr != '2sq') {
        y = display.innerText += num;
    } else {
        x = display.innerText += num;
    }
    const plus = document.getElementById('plus').addEventListener('click', () => {
        opr = '+';
        display.innerText = '';
    });
    const minus = document.getElementById('minus').addEventListener('click', () => {
        opr = '-';
        display.innerText = '';
    });
    const multi = document.getElementById('multiply').addEventListener('click', () => {
        opr = '*';
        display.innerText = '';
    });
    const divide = document.getElementById('divide').addEventListener('click', () => {
        opr = '/';
        display.innerText = '';
    });
    const square = document.getElementById('x_x').addEventListener('click', () => {
        opr = '^2';
        display.innerText = "Press '='";
    });
    const divideByX = document.getElementById('d_x').addEventListener('click', () => {
        opr = '1/x';
        display.innerText = "Press '='";
    });
    const remainder = document.getElementById('remainder').addEventListener('click', () => {
        opr = '%';
        display.innerText = '';
    });
    const squareF = document.getElementById('t_und_root').addEventListener('click', () => {
        opr = '2sq';
        display.innerText = "Press ' = '";
    });
    const equal = document.getElementById('result').addEventListener('click', () => {
        if (opr == '+') {
            res = parseInt(x) + parseInt(y);
            display.innerText = res;
        } else if (opr == '-') {
            res = parseInt(x) - parseInt(y);
            display.innerText = res;
            x, y = 0
        } else if (opr == '*') {
            res = parseInt(x) * parseInt(y);
            display.innerText = res;
            x, y = 0
        } else if (opr == '/') {
            res = parseInt(x) / parseInt(y);
            display.innerText = res;
        } else if (opr == '^2') {
            res = parseInt(x) * 2;
            display.innerText = res;
        } else if (opr == '1/x') {
            res = 1 / parseInt(x);
            display.innerText = res;
        } else if (opr == '%') {
            res = parseInt(x) % parseInt(y);
            display.innerText = res;
        } else if (opr == '2sq') {
            res = Math.sqrt(parseInt(x));
            display.innerText = res;
        } else {
            alert('select an operator');
        }
        const clearAll = document.getElementById('CE').addEventListener('click', () => {
            if (y != 0) {
                y = 0;
            } else {
                x = 0;
            }
        });
        const del = document.getElementById('del').addEventListener('click', () => {
            display.innerText = display.innerText.slice(0, display.innerText.length - 1);
        });
        const clear = document.getElementById('C').addEventListener('click', () => {
            display.innerText = '';
            x = 0;
            y = 0;
            opr = 0;
        });
    });

}



function clr() {
    display.innerText = '';

}