let saldo = 10000;

export function getSaldo(): number {
  return saldo;
}

export function atualizarSaldo(novoSaldo: number): void {
  saldo = novoSaldo;
  atualizarVisual();
}

function atualizarVisual(): void {
  const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
  if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}

// Quando a página carregar, já mostra o saldo inicial
document.addEventListener("DOMContentLoaded", atualizarVisual);
