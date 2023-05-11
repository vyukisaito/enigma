'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === null) {
        return; // encerra a função se a resposta for 'null'
    }

    if (answer === 'benevides' || answer === 'benevides ') {
        window.location.href = 'https://vyukisaito.github.io/enigma/19º/'
    } else if (answer === '') {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
} 