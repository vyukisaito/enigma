'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === 'benevides') {
        window.location.href = 'http://127.0.0.1:5500/fase2/index.html'
    } else if (answer === '' || answer === null) {
        alert('eRRRRRRRRRRRrouu');
    } else {
        alert('eRRRRRRRRRRRrouu');
    }
}