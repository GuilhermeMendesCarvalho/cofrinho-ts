import { tipoTransacao } from "../tipo-transacao.js";
import { getSaldo, atualizarSaldo } from "./saldo.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

if (elementoFormulario) {
  elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
      alert('Preencha todos os campos para transação!');
      return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    const tipoSelecionado = inputTipoTransacao.value as tipoTransacao;
    const valor = parseFloat(inputValor.value.replace(',', '.'));
    const data = new Date(inputData.value);

    let saldoAtual = getSaldo();

    if (tipoSelecionado === tipoTransacao.DEPOSITO) {
      saldoAtual += valor;
    } else if (
      tipoSelecionado === tipoTransacao.TRANSFERENCIA ||
      tipoSelecionado === tipoTransacao.PAGAMENTO_BOLETO
    ) {
      saldoAtual -= valor;
    } else {
      alert('Tipo de transação é inválido!');
      return;
    }

    atualizarSaldo(saldoAtual);

    const novaTransacao = {
      tipoTransacao: tipoSelecionado,
      valor: valor,
      data: data
    };

    console.log(novaTransacao);
    elementoFormulario.reset();
  });
}
