'use strict'
let resposta = document.getElementById('resposta')

function res() {
    let answer = prompt('Digite sua resposta:')

    if (answer === 'ver-o-peso' || 'ver o peso' || 'ver-o-peso ' || 'ver o peso ') {
        window.alert('Parabén!! Você venceu')
    } else if (answer === '' || answer === null) {
        alert('pq não preencheu???');
    } else {
        alert('eRRRRRRRRRRou pense mais');
    }
} 