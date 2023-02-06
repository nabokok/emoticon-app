const array = document.querySelector('.array-brackets');
let arr = [];

function arrayOutput() {
    array.innerHTML = `[${arr}]`;
}

export {arrayOutput, arr};