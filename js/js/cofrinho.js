let saldo = 10000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const elementoFormulario = document.querySelector(".block-nova-transacao form");

elementoFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!elementoFormulario.checkValidity()) {
    alert('Preencha todos os campos para transação!');
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
  const inputValor = elementoFormulario.querySelector("#valor");
  const inputData = elementoFormulario.querySelector(("#data"));

  let tipoTransacao = inputTipoTransacao.value;
  let valor = parseFloat(inputValor.value.replace(',', '.'));
  let data = inputData.value;

  if(tipoTransacao == 'Depósito'){
    saldo += valor;
  }else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto'){
    saldo -= valor;
  }else{
    alert('tipo de transação é invalido!');
    return;
  }

    elementoSaldo.textContent = saldo.toLocaleString("pt-BR",{
        style: "currency",
        currency: 'BRL'
    });

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }

  console.log(novaTransacao);
  elementoFormulario.reset();
});
