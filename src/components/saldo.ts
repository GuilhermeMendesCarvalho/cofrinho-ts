let saldo = 10000;

alert('testando compilador!!');
const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
if (elementoSaldo) {
  elementoSaldo.textContent = saldo.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}