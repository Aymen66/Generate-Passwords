

let myArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let generatePasswordsOne = document.getElementById("generate-passwords-one")
let generatePasswordsTwo = document.getElementById("generate-passwords-two")

let generateButton = document.getElementById("generateButton")


generateButton.addEventListener("click", function () {
    
    random = [...Array(15)]
    .map(_ => [...Array(1)].map(_ => myArray[Math.floor(Math.random() * myArray.length)]))
    generatePasswordsOne.textContent = random.join('');

})
generateButton.addEventListener("click", function () {
    
    random = [...Array(15)]
    .map(_ => [...Array(1)].map(_ => myArray[Math.floor(Math.random() * myArray.length)]))
    generatePasswordsTwo.textContent = random.join('');
    
    let copyNote = document.getElementById("copyNote")

    copyNote.innerHTML = "<p>Press the password to copy to the clipboard </p>"
})

function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    }

