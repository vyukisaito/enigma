'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === null) {
        return; // encerra a função se a resposta for 'null'
    }

    if (answer === 'sbpv' || answer === 'sbpv ') {
        window.location.href = 'https://vyukisaito.github.io/enigma/apenas-siga-as-instruções/'
    } else if (answer === '') {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
}

function clicar() {
    alert('DICA: tem palavras escondidas!')
}
