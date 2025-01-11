const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const index1=Math.round(Math.random()*26);
const letter1=alphabet[index1];

const index2=Math.round(Math.random()*26);
const letter2=alphabet[index2];

const index3=Math.round(Math.random()*26);
const letter3=alphabet[index3];

const index4=Math.round(Math.random()*26);
const letter4=alphabet[index4];

document.querySelector('.container').textContent=letter1+letter2+letter3+letter4;

console.log(letter1+letter2+letter3+letter4);