const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularButton = document.getElementById('btnCalcular');
const textoResultado = document.getElementById('textoResultado');

calcularButton.addEventListener('click', async () => {
    const peso = pesoInput.value;
    const altura = alturaInput.value;
    const resposta = await fetch(`/calcularIMC?peso=${peso}&altura=${altura}`);
    if (!resposta.ok) {
        throw new Error('Erro ao calcular IMC');
    }else{
        const dados = await resposta.json();
        textoResultado.textContent = `O IMC calculado é: ${dados.imc}`;
    }
});