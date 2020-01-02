var randomNumber = Math.floor(Math.random() * 100) + 1;
var sendButton = document.send;
var chislo = document.querySelector('.chislo');
var attempt = document.querySelector('.attempt');
var lastResult = document.querySelector('.lastResult');
var loh = document.querySelector('.loh');
var resetButton;
//var attCount = 1;




function checkAtt(text) {
    var userInput = Number(chislo.Value);
    for (var attCount = 0; attCount < 10; attCount++) {
        if (userInput == randomNumber) {
            lastResult.textContent = "Угадал!!!";
            document.write (lastResult)
            setGameOver;
        }
        else if (userInput > randomNumber) 
            loh.textContent = "Меньше";
        else 
        loh.textContent = "Больше";
    }
    else {
        lastResult.textContent = 'Проиграл';
        setGameOver();
    }
    
}
sendButton.addEventListener("onclick", checkAtt);
