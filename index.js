const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/sort-string', (req, res) => {
    const inputString = req.body.data;

    if (typeof inputString !== 'string') {
        return res.status(400).json({ error: 'Invalid input. Please provide a string.' });
    }

    const charArray = inputString.split('');

    const sortedArray = charArray.sort();

    res.json({ word: sortedArray });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
