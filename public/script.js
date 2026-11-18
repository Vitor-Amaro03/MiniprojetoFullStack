const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularButton = document.getElementById('btnCalcular');
const textoResultado = document.getElementById('textoResultado');

calcularButton.addEventListener('click', async () => {
    const peso = pesoInput.value;
    const altura = alturaInput.value;
    const resposta = await fetch(`/calcularIMC?peso=${peso}&altura=${altura}`);
    const dados = await resposta.json();
    if (!resposta.ok) {
        textoResultado.textContent = 'Erro ao calcular IMC';
    }else{
        textoResultado.textContent = `O IMC calculado é: ${dados.imc}`;
    }
});