'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === 'sbpv') {
        window.location.href = ''
    } else if (answer === '' || answer === null) {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
}