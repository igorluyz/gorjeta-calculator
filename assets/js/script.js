// Obtenha elementos do DOM
const valorConta = document.getElementById('valor-conta');
const taxaDeGorjeta = document.getElementById('percentual-gorjeta');
const buttonCalcular = document.querySelector("[data-button]");
const gorjetaCalculada = document.getElementById('valor-gorjeta');
const totalConta = document.getElementById('total-conta');
const clearButton = document.getElementById('clear');

valorConta.addEventListener('blur', () => {
    // Obtenha o valor do campo de entrada
    const valor = parseFloat(valorConta.value);
  
    // Verifique se o valor é um número válido
    if (!isNaN(valor)) {
      // Formate o valor como moeda brasileira
      const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
      // Defina o valor formatado de volta no campo de entrada
      valorConta.value = valorFormatado;
    }
  });

  taxaDeGorjeta.addEventListener('blur', () => {
    // Obtenha o valor do campo de porcentagem
    const valorPorcentagem = parseFloat(taxaDeGorjeta.value);
  
    // Verifique se o valor é um número válido
    if (!isNaN(valorPorcentagem)) {
      // Adicione o símbolo de porcentagem ao valor
      taxaDeGorjeta.value = `${valorPorcentagem}%`;
    }
  });

  function removerNaoNumericos(str) {
    // Use uma expressão regular para encontrar todos os caracteres não numéricos e removê-los
    return str.replace(/[^0-9,]/g, '');
  }
  
// Adicione um evento de clique ao botão de cálculo
buttonCalcular.addEventListener('click', () => {
    const valorContaInput = removerNaoNumericos(valorConta.value);
    // const valorContaInput = parseFloat(valorConta.value)
    const porcentagemGorjeta = removerNaoNumericos(taxaDeGorjeta.value);

    const valorContaInputReal = parseFloat(valorContaInput)

    const porcentagemGorjetarReal = parseFloat(porcentagemGorjeta);
    console.log(porcentagemGorjetarReal)

    // Verifique se os valores inseridos são válidos
    if (!isNaN(valorContaInputReal) && !isNaN(porcentagemGorjetarReal)){
        const gorjetaCalc = (valorContaInputReal * (porcentagemGorjetarReal / 100)).toFixed(2)
        const contaFinal = (valorContaInputReal + parseFloat(gorjetaCalc)).toFixed(2)

        // Exiba os resultados
        gorjetaCalculada.textContent = `R$${gorjetaCalc}`;
        totalConta.textContent = `R$${contaFinal}`;
    }else{
        alert('Por favor, insira valores válidos.');
    }
})

// Adiciona um evento de clique ao botão de limpar
clearButton.addEventListener('click', () => {
    // Limpa os campos de entrada e os resultados
    valorConta.value = '';
    taxaDeGorjeta.value = '';
    totalConta.textContent = '';
    gorjetaCalculada.textContent = '';
});

  
