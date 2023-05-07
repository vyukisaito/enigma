'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === 'menino jesus' || 'menino deus' || 'menino de Deus' || 'menino Jesus' || 'menino jesus ' || 'menino deus ' || 'menino de Deus ' || 'menino Jesus ') {
        window.location.href = 'https://vyukisaito.github.io/enigma/fase6/'
    } else if (answer === '' || answer === null) {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
} 