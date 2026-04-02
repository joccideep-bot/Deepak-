const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample data for color trading
let trades = [];

// Endpoint for making a trade
app.post('/trade', (req, res) => {
    const { color, amount } = req.body;
    if (!color || !amount) {
        return res.status(400).send('Color and amount are required');
    }
    const trade = { color, amount, timestamp: new Date().toISOString() };
    trades.push(trade);
    res.status(201).json(trade);
});

// Endpoint for getting all trades
app.get('/trades', (req, res) => {
    res.json(trades);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
