'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === null) {
        return; // encerra a função se a resposta for 'null'
    }

    if (answer === 'ver-o-peso' || 'ver o peso' || 'ver-o-peso ' || 'ver o peso ') {
        alert(`Parabéns!! Vocês Venceram o enigma!!`)
    } else if (answer === '') {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
}