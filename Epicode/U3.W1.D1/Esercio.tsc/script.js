var spanResult = document.getElementById('risultato');
var spanResult1 = document.getElementById('risultato1');
var randomNumberGame = function () {
    var player1 = parseFloat(document.getElementById("player1").value);
    var player2 = parseFloat(document.getElementById("player2").value);
    var randomNumberGenerator = Math.floor(Math.random() * 10);
    console.log('Il giocatore 1 sceglie il numero: ' + player1 + " Il giocatore 2 sceglie il numero:  " + player2 + " Il numero estratto è: " + randomNumberGenerator);
    spanResult1.innerText = 'Il giocatore 1 sceglie il numero: ' + player1 + " Il giocatore 2 sceglie il numero:  " + player2 + " Il numero estratto è: " + randomNumberGenerator;
    if (player1 === player2 && player1 === randomNumberGenerator) {
        spanResult.innerText = 'Entrambi hanno indovinato il numero estratto';
    }
    else if (randomNumberGenerator === player1) {
        console.log('Player 1 wins!');
        spanResult.innerText = 'Player 1 wins!';
    }
    else if (randomNumberGenerator === player2) {
        console.log('player 2 wins!');
        spanResult.innerText = 'player 2 wins!';
    }
    else if (randomNumberGenerator !== player1 && randomNumberGenerator !== player2) {
        if (Math.abs(player1 - randomNumberGenerator) < Math.abs(player2 - randomNumberGenerator)) {
            console.log('Il giocatore 1 si è avvicinato di più!');
            spanResult.innerText = 'Il giocatore 1 si è avvicinato di più!';
        }
        else if (Math.abs(player1 - randomNumberGenerator) > Math.abs(player2 - randomNumberGenerator)) {
            console.log('l giocatore 2 si è avvicinato di più!');
            spanResult.innerText = 'l giocatore 2 si è avvicinato di più!';
        }
        else {
            console.log('Pareggio!');
            spanResult.innerText = 'Pareggio!';
        }
    }
};
//Tentativi di manipolazione del dominio
var submitButton = document.querySelector('button');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    randomNumberGame();
});
