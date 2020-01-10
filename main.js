var randomNum = Math.floor(Math.random() *100) + 1;
var userInput;
var attempts = 1;
var comparison = document.querySelector('h2');
var inputField = document.querySelector('inputField');

document.getElementById('button').onclick = () => checkNum();           
//Проверка введеного числа 1 - 100
function checkNum() {
    userInput = Number(inputField).value;
    if (userInput > 0 && userInput <= 100) {
       checkAtt();
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
        comparison.innerText = 'Угадал';
        gameOver();
    }
    else loh();
}
//Проверка больше или меньше рандома    
function loh() {    
    if (userInput > randomNum) {
        comparison.innerText = 'Меньше';
        checkNum();
    }
    else if (userInput < randomNum) {
        comparison.innerText = 'Больше';
        checkNum();
    }
    attempts++;
}
//Конец игры
function gameOver() {
    alert ("one More");
}