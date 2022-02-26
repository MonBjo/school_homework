import {key} from './key.js';

const textInputElem = document.querySelector('#messageInput');
const messageDisplayElem = document.querySelector('#messageDisplay');
const encryptElem = document.querySelector('#encrypt');
const decryptElem = document.querySelector('#decrypt');

console.log(key);

encryptElem.addEventListener('click', () => {
    console.log(textInputElem.value);
    encryptMessage();
});

decryptElem.addEventListener('click', () => {
    console.log(textInputElem.value);
    decryptMessage()
});

function encryptMessage() {
    let message = textInputElem.value.toUpperCase();
    let newMessage = "";

    for(let char of message) {
        for(let symbol of key){
            if(char == symbol[0]){
                console.log(`${char} : ${symbol[0]} : ${symbol[1]}`);
                newMessage += symbol[1]
                break;
            }
        }
    }
    messageDisplayElem.innerHTML = newMessage;
    console.log(newMessage);
}

function decryptMessage() {
    let message = textInputElem.value.toUpperCase();
    let newMessage = "";
    console.log(newMessage);

    for(let char of message) {
        for(let symbol of key){
            if(char == symbol[1]){
                console.log(`${char} : ${symbol[0]} : ${symbol[1]}`);
                newMessage += symbol[0]
                break;
            }
        }
    }
    messageDisplayElem.innerHTML = newMessage;
    console.log(newMessage);
}