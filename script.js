import { arrayOutput, arr } from "./array-output.js";
import { setOutput } from "./set-output.js"

const emoticons = ['👋', '👌', '🤟', '👍', '🙌', '🤞'];
const addBtn = document.querySelector('.btn');
const input = document.querySelector('.input');

    
document.addEventListener('DOMContentLoaded', () => {
    addEmoticon();
})

addBtn.addEventListener('click', () => {
    if (input.value) {
        arr.push(input.value);
    }
    arrayOutput();
    setOutput();
    addEmoticon();
})

function addEmoticon() {
    const item = emoticons[Math.floor(Math.random() * emoticons.length)];
    input.value = item;
}
