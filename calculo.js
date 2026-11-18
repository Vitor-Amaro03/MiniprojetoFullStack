export function calcularIMC(peso, altura) {
    const calc = peso / (altura * altura);
    return Number(calc.toFixed(2));
}