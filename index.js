

let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let generatePasswordsOne = document.getElementById("generate-passwords-one")
let generatePasswordsTwo = document.getElementById("generate-passwords-two")

let generateButton = document.getElementById("generateButton")

generateButton.addEventListener("click", function () {

    let randomIndexOne = Math.floor(Math.random() * characters.length)
    let randomIndexTwo = Math.floor(Math.random() * characters.length)
    let randomIndexThree = Math.floor(Math.random() * characters.length)
    let randomIndexFour = Math.floor(Math.random() * characters.length)
    let randomIndexFive = Math.floor(Math.random() * characters.length)
    let randomIndexSix = Math.floor(Math.random() * characters.length)
    let randomIndexSeven = Math.floor(Math.random() * characters.length)
    let randomIndexEight = Math.floor(Math.random() * characters.length)
    let randomIndexNine = Math.floor(Math.random() * characters.length)
    let randomIndexTen = Math.floor(Math.random() * characters.length)
    let randomIndexEleven = Math.floor(Math.random() * characters.length)
    let randomIndexTwelve = Math.floor(Math.random() * characters.length)
    let randomIndexThirteen = Math.floor(Math.random() * characters.length)
    let randomIndexFourteen = Math.floor(Math.random() * characters.length)
    let randomIndexFifteen = Math.floor(Math.random() * characters.length)

    generatePasswordsOne.textContent = characters[randomIndexOne] + " " + characters[randomIndexTwo] + " " + characters[randomIndexThree] + " " + characters[randomIndexFour] + " " + characters[randomIndexFive] + " " + characters[randomIndexSix] + " " + characters[randomIndexSeven] + " " + characters[randomIndexEight] + " " + characters[randomIndexNine] + " " + characters[randomIndexTen] + " " + characters[randomIndexEleven] + " " + characters[randomIndexTwelve] + " " + characters[randomIndexThirteen] + " " + characters[randomIndexFourteen] + " " + characters[randomIndexFifteen]
    let randomIndexElOne = Math.floor(Math.random() * characters.length)
    let randomIndexElTwo = Math.floor(Math.random() * characters.length)
    let randomIndexElThree = Math.floor(Math.random() * characters.length)
    let randomIndexElFour = Math.floor(Math.random() * characters.length)
    let randomIndexElFive = Math.floor(Math.random() * characters.length)
    let randomIndexElSix = Math.floor(Math.random() * characters.length)
    let randomIndexElSeven = Math.floor(Math.random() * characters.length)
    let randomIndexElEight = Math.floor(Math.random() * characters.length)
    let randomIndexElNine = Math.floor(Math.random() * characters.length)
    let randomIndexElTen = Math.floor(Math.random() * characters.length)
    let randomIndexElEleven = Math.floor(Math.random() * characters.length)
    let randomIndexElTwelve = Math.floor(Math.random() * characters.length)
    let randomIndexElThirteen = Math.floor(Math.random() * characters.length)
    let randomIndexElFourteen = Math.floor(Math.random() * characters.length)
    let randomIndexElFifteen = Math.floor(Math.random() * characters.length)
    generatePasswordsTwo.textContent = characters[randomIndexElOne]+ " " + characters[randomIndexElTwo] + " " + characters[randomIndexElThree]+ " " + characters[randomIndexElFour]+ " " + characters[randomIndexElFive] + " " + characters[randomIndexElSix]+ " " + characters[randomIndexElSeven] + " " + characters[randomIndexElEight] + " " + characters[randomIndexElNine] + " " + characters[randomIndexElTen] + " " + characters[randomIndexElEleven] + " " + characters[randomIndexElTwelve]   + " " + characters[randomIndexElThirteen]+ " " + characters[randomIndexElFourteen] + " " + characters[randomIndexElFifteen]

   //  


})
function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    }





/*

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePasswordsOne =document.getElementById("generate-passwords-one")
let generatePasswordsTwo =document.getElementById("generate-passwords-two")
let generateButton =document.getElementById("generateButton")

function generateButton(){
    let randomIndexOne = Math.floor(Math.random() * 3)
    let randomIndexTwo = Math.floor(Math.random() * 3)
    generatePasswordsOne.textContent = characters[randomIndexOne]
    generatePasswordsTwo.textContent = characters[randomIndexTwo]

}generateButton()
*/



/*
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePasswordsOne =document.getElementById("generate-passwords-one")
let generatePasswordsTwo =document.getElementById("generate-passwords-two")
let generateButton =document.getElementById("generateButton")

generateButton.addEventListener("click", function(){
    let randomIndexOne = Math.floor(Math.random() * 3)
    let randomIndexTwo = Math.floor(Math.random() * 3)
    console.log(randomIndexOne)
    generatePasswordsOne.textContent = characters[randomIndexOne]
    generatePasswordsTwo.textContent = characters[randomIndexTwo]

}

)

*/