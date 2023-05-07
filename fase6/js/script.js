'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === 'pv' || 'pv ') {
        window.location.href = 'https://vyukisaito.github.io/enigma/fase7/'
    } else if (answer === '' || answer === null) {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
} 