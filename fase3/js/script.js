'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === 'sbpv' || 'sbpv ') {
        window.location.href = 'https://vyukisaito.github.io/enigma/fase4/'
    } else if (answer === '' || answer === null) {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
}

function clicar() {
    alert('DICA: tem palavras escondas!')
}