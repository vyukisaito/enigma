'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === null) {
        return; // encerra a função se a resposta for 'null'
    }

    if (answer === 'sbpv' || 'sbpv ') {
        window.location.href = 'https://vyukisaito.github.io/enigma/fase4/'
    } else if (answer === '') {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
}

function clicar() {
    alert('DICA: tem palavras escondas!')
}
