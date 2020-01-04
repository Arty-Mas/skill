var randomNumber = Math.floor(Math.random() * 101) + 1;
var field = document.check.chislo;
var userInt = field.value;
var attempts;
var result = document.createElement("p");


//Сравниваем введеное и загадонное
function checkLoh (){
if (attempts === 1) {
    result.textContent = 'Попытка 1: ';
}   
if (userInt == randomNumber) {
    result.textContent = 'Вы выиграли';
    gameOver();
}
else if (userInt < randomNumber){
    result.textContent = 'Больше';
} 
else if (userInt > randomNumber){
    result.textContent = 'Меньше';
}
else if (attempts === 10)
    result.textContent = 'Вы проиграли';
    gameOver();

  attempts++;
  field.value = '';
  field.focus();
}
 
function gameOver() {
    field.disabled = true;
    sendBut.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Начать заново';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    attempts = 1;
  
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    field.disabled = false;
    sendBut.disabled = false;
    field.value = '';
    field.focus();
  
    //lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 101) + 1;
  }
//document.addEventListener ("onclick", checkAtt);
//Проверяем количество попыток
//function checkAtt () {
//for (attempts === 1; attempts < 10; attempts ++) {
   // checkLoh ();
  //  if (attempts == 10) result.textContent = 'Вы проиграли';
    //var attemptsCount = document.createElement("p");
    //attemptsCount = attempts.value;
    //resultGame.appendChild(attemptsCount);

//}

//}

resultGame.appendChild(result);
var sendBut = document.check.send;
sendBut.addEventListener("click", checkLoh);
