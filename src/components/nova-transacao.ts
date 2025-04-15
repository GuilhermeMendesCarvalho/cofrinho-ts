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

    let tipoTransacao = inputTipoTransacao.value;
    let valor = parseFloat(inputValor.value.replace(',', '.'));
    let data = inputData.value;

    if (tipoTransacao === 'Depósito') {
      saldo += valor;
    } else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
      saldo -= valor;
    } else {
      alert('tipo de transação é invalido!');
      return;
    }

    if (elementoSaldo) {
      elementoSaldo.textContent = saldo.toLocaleString("pt-BR", {
        style: "currency",
        currency: 'BRL'
      });
    }

    const novaTransacao = {
      tipoTransacao,
      valor,
      data
    };

    console.log(novaTransacao);
    elementoFormulario.reset();
  });
}
