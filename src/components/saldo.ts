import { formatarData, formatarMoeda, FormatoData } from "../utils/formatters.js";

//BLOCO SALDO CAMPO VALOR, QUANDO INICIA E QUANDO ATUALIZA
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
    elementoSaldo.textContent = formatarMoeda(saldo);
  }
}
//FAZ O MESMO PARA DATA
function atualizarData(){
const elementoData = document.querySelector(".block-saldo time") as HTMLElement;
if (elementoData){
  const dataAcesso: Date = new Date();
  elementoData.textContent = formatarData(dataAcesso, FormatoData.completaComDia);
}
}

// PARA QUANDO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", () => {
  atualizarVisual();
  atualizarData();
  console.log("Rodando saldo.ts");
});

