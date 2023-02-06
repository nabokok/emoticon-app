import { arrayOutput, arr } from "./array-output.js";
import { setOutput } from "./set-output.js"

const emoticons = ['👋', '👌', '🤟', '👍', '🙌', '🤞'];
const addBtn = document.querySelector('.btn');
const input = document.querySelector('.input');

addBtn.addEventListener('click', () => {
    const item = emoticons[Math.floor(Math.random() * emoticons.length)];
    input.value = item;
    arr.push(item);
    arrayOutput();
    setOutput();
})

document.addEventListener("keydown", (event) => {
    const key = event.key; 
    if (key === "Backspace" || key === "Delete") {
        arr.length = arr.length - 1;
    }
    arrayOutput();
    setOutput();
});

