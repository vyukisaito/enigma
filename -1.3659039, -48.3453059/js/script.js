'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === null) {
        return; // encerra a função se a resposta for 'null'
    }

    if (answer === 'menino jesus' || answer === 'menino deus' || answer === 'menino jesus ' || answer === 'menino deus ' || answer === 'menino de jesus' || answer === 'menino de deus' || answer === 'menino de jesus ' || answer === 'menino de deus') {
        window.location.href = 'https://vyukisaito.github.io/enigma/direção/'
    } else if (answer === '') {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
} 