let saldo = 10000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});