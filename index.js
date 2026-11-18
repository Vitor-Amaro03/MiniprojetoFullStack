import express from 'express';
import { calcularIMC } from './calculo.js';

const app = express();
const port = 3000;

app.use (express.static('public'));

app.get('/calcularIMC', (req, res) => {
    const { peso, altura } = req.query;
    if (!peso || !altura) {
        return res.status(400).json({ error: 'Peso e altura são obrigatórios' });
    }
    const pesoNum = Number(peso.replace(',', '.'));
    const alturaNum = Number(altura.replace(',', '.'));
    if(isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
        return res.status(400).json({ error: 'Valores inválidos para peso ou altura' });
    }
    const imc = calcularIMC (pesoNum, alturaNum);
    res.json({ imc });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});