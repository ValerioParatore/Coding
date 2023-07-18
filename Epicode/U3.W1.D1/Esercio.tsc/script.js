"use strict";
const spanResult = document.getElementById('risultato');
const spanNumeroEstratto = document.getElementById('numero-estratto');
const randomNumberGame = function () {
    let player1 = parseInt(document.getElementById("player1").value);
    let player2 = parseInt(document.getElementById("player2").value);
    let randomNumberGenerator = Math.floor(Math.random() * 10);
    console.log('Il giocatore 1 sceglie il numero: ' + player1 + " Il giocatore 2 sceglie il numero:  " + player2 + " Il numero estratto è: " + randomNumberGenerator);
    spanNumeroEstratto.innerText = "Il numero estratto è: " + randomNumberGenerator;
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
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    randomNumberGame();
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    player1.value = '';
    player2.value = '';
});
