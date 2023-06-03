function validarInput(input) {
    var regex = /^\d+(\.\d{1,2})?$/; // Expressão regular para um valor monetário válido

    if (!regex.test(input.value)) {
    input.setCustomValidity("Digite um valor monetário válido!");
    } else {
    input.setCustomValidity("");
    }
}

function formatarValor(input) {
    var valor = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    var numeroFormatado = parseFloat(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    input.value = numeroFormatado;
}