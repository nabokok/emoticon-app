import {arr} from "./array-output.js";

const set = document.querySelector('.set-brackets');

function setOutput() {
    set.innerHTML = `[${[...new Set(arr)]}]`;
}

export {setOutput};