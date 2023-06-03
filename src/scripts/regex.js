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
      var valorFormatado = '';
      var contador = 0;

      for (var i = valor.length - 1; i >= 0; i--) {
        if (contador === 2) {
          valorFormatado = '.' + valorFormatado;
          contador = 0;
        }
        valorFormatado = valor[i] + valorFormatado;
        contador++;
      }

      input.value = valorFormatado;
    }