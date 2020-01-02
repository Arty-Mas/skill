var randomNumber = Math.floor(Math.random() * 100) + 1;
var userInt;
var attempts;
var result;


//Сравниваем введеное и загадонное
function checkLoh (){
if (userInt == randomNumber) {
    lastResult.textContent = 'Вы выиграли';
}
else if (userInt < randomNumber){
    lastResult.textContent = 'Больше';
} 
else  {
    lastResult.textContent = 'Меньше';
}
}
 
//Проверяем количество попыток
function checkAtt () {
for (attempts = 1; attempts < 10; attempts ++) {
    checkLoh ();
}
}
