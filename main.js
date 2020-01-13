var randomNum = Math.floor(Math.random() *100) + 1;
var userInput;
var attempts = 1;
var comparison = document.querySelector('h2');
var inputField = document.querySelector('inputField');

document.getElementById('button').onclick = () => checkNum();           
//Проверка введеного числа 1 - 100
function checkNum() {
    userInput = parseInt(document.gameR.inputField.value);
    if (userInput > 0 && userInput <= 100) {
        return (userInput);
        }
    else  alert('Число вне диапазона');
    }
//Попытка    
function checkAtt() {
    if (attempts >= 1 && attempts < 11) {
        runCheckNum();
    }
    else gameOver();
}
//Совпдает ли с рандомом    
function runCheckNum() {
    if (userInput === randomNum) {
        alert('да');
        //comparison.innerText = 'Угадал';
        gameOver();
    }
    
}
//Проверка больше или меньше рандома    
function loh() {    
    if (userInput > randomNum) {
        alert('меньше');
        //comparison.innerText = 'Меньше';
        checkNum();
    }
    else if (userInput < randomNum) {
        alert('больше');
        //comparison.innerText = 'Больше';
        checkNum();
    }
    attempts++;
  //  return;
}
//Конец игры
function gameOver() {
    alert ("one More");
}