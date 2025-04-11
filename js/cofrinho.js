var saldo = 10000;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
if (elementoFormulario) {
    elementoFormulario.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert('Preencha todos os campos para transação!');
            return;
        }
        var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        var inputValor = elementoFormulario.querySelector("#valor");
        var inputData = elementoFormulario.querySelector("#data");
        var tipoTransacao = inputTipoTransacao.value;
        var valor = parseFloat(inputValor.value.replace(',', '.'));
        var data = inputData.value;
        if (tipoTransacao === 'Depósito') {
            saldo += valor;
        }
        else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
            saldo -= valor;
        }
        else {
            alert('tipo de transação é invalido!');
            return;
        }
        if (elementoSaldo) {
            elementoSaldo.textContent = saldo.toLocaleString("pt-BR", {
                style: "currency",
                currency: 'BRL'
            });
        }
        var novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        console.log(novaTransacao);
        elementoFormulario.reset();
    });
}
