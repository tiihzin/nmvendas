//ADICIONA O BORDER-BOTTOM QUANDO O INPUT DE VALOR É SELECIONADO
function divSelect(input) {
  var inputSelect = document.activeElement === input;
  var div = document.querySelector(".input-valor");

  if (inputSelect) {
    div.classList.add("valor-ativo");
  } else {
    div.classList.remove("valor-ativo");
  }
}

var valorLiquido = 0;
let displayLiquido = document.querySelector("#valorliquido");
//FORMATA O VALUE DO INPUT

function formatarValor() {
  let display = document.querySelector("#valorbruto");
let ValorCobrar = document.querySelector("#valor-cobrar");

  var valor = ValorCobrar.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

  // Remover zeros à esquerda
  valor = valor.replace(/^0+/, "");

  // Adicionar ponto a cada três dígitos da parte inteira
  var parteInteira = valor.slice(0, -2);
  var parteDecimal = valor.slice(-2);
  parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Adicionar vírgula antes dos dois últimos dígitos
  if (parteInteira.length <= 0) {
    parteInteira = "0";
    ValorCobrar.value = "0,00";
    display.innerHTML = "0,00";
    displayLiquido.innerHTML = "0,00";
  }

  var valorFormatado = parteInteira + "," + parteDecimal;

  if (parteInteira != "0") {
    display.innerHTML = valorFormatado;
  }

  // Atualizar o valor no input formatado
  ValorCobrar.value = valorFormatado;

  valorLiquido = parseFloat(parteInteira.replace(".", "") + "." + parteDecimal);
  atualizaselect()
}

let comocobrar = document.querySelector("#comocobrar");
let tipopagamento = document.querySelector("#tipopagamento");
let quandorecebe = document.querySelector("#quandorecebe");
let tipoparcelas = document.querySelector("#tipoparcelas");

function atualizaselect() {
  //PAGAMENTO DÉBITO NA HORA
  if (tipopagamento.value == 1) {
    quandorecebe.setAttribute("disabled", "true");
    quandorecebe.innerHTML =
      '<option selected value="1" >Na hora</option><option value="2">14 dias</option>      <option value="3">30 dias</option>';

    tipoparcelas.setAttribute("disabled", "true");
    tipoparcelas.innerHTML =
      '<option selected value="1" >À vista</option><option value="2">Parcelado Comprador</option><option value="3">Parcelado Vendedor</option>';
    

    var valorFinal = valorLiquido - (valorLiquido * 1.99 / 100)
    displayLiquido.innerHTML = valorFinal
  }
  //PAGAMENTO CRÉDITO
  if (tipopagamento.value == 2) {
    quandorecebe.removeAttribute("disabled");
    tipoparcelas.removeAttribute("disabled");

    switch (quandorecebe.value) {
      //NA HORA
      case "1":
        switch (tipoparcelas.value) {
          case "1":
            console.log(tipoparcelas.value);
          //A VISTA
          //taxa 4,98%

          case "2":
            console.log(tipoparcelas.value);
          //PARCELADO COMPRADOR
          //taxa 5.31%

          case "3":
            console.log(tipoparcelas.value);
          //PARCELADO VENDEDOR
          //taxa 5,31% + 4.59%
        }

      //14 DIAS
      case "2":
        switch (tipoparcelas.value) {
          case "1":
            console.log(tipoparcelas.value);
          //A VISTA
          //taxa 3.79%

          case "2":
            console.log(tipoparcelas.value);
          //PARCELADO COMPRADOR
          //taxa 4.36%

          case "3":
            console.log(tipoparcelas.value);
          //PARCELADO VENDEDOR
          //taxa 4.36% + 4.59%
        }

      //30 DIAS
      case "3":
        switch (tipoparcelas.value) {
          case "1":
            console.log(tipoparcelas.value);
          //A VISTA
          //taxa 3.79%

          case "2":
            console.log(tipoparcelas.value);
          //PARCELADO COMPRADOR
          //taxa 3.60%

          case "3":
            console.log(tipoparcelas.value);
          //PARCELADO VENDEDOR
          //taxa 3.60% + 4.59%
        }
    }
  }

  //PAGAMENTO PIX NA HORA
  if (tipopagamento.value == 3) {
    quandorecebe.setAttribute("disabled", "true");
    quandorecebe.innerHTML =
      '<option selected value="1" >Na hora</option><option value="2">14 dias</option>      <option value="3">30 dias</option>';

    tipoparcelas.setAttribute("disabled", "true");
    tipoparcelas.innerHTML =
      '<option selected value="1" >À vista</option><option value="2">Parcelado Comprador</option><option value="3">Parcelado Vendedor</option>';
    //taxa 00%
  }
}
