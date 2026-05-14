const express = require('express');
const app = express();

app.use(express.json());

app.post('/util/text/:action', (req, res) => {
    const { action } = req.params;
    const { input } = req.body;
    let output = '';

    if (action === 'lowercase') {
        output = input.toLowerCase();
    } else if (action === 'uppercase') {
        output = input.toUpperCase();
    }

    res.json({ action, input, output });
});

// --- UTILITÁRIO DE NÚMERO (GET) ---
app.get('/util/number/:action', (req, res) => {
    const { action } = req.params;
    const inputString = req.query.input;
    const inputArray = inputString.split(',').map(Number);
    
    let output;

    if (action === 'minimum') {
        output = Math.min(...inputArray);
    } else if (action === 'maximum') {
        output = Math.max(...inputArray);
    }

    res.json({ 
        action, 
        input: inputString.split(','), 
        output 
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Utilitários rodando em http://localhost:${PORT}`);
});