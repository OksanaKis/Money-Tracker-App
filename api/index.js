const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json('test ok34');
});

app.post('/api/transaction', (req, res) => {
    console.log('req.body');
    res.json(req.body);
});

app.post('/api/transaction',(req, res) => {
    const {name, description, datetime} = res.body;
    res.json(req.body);
});

app.listen(4040);

// app.post('/api/transaction', (req, res) => {
//     // const { name, description, datetime } = req.body;
//     // console.log('Received transaction:', { name, description, datetime });
//     // res.json({ message: 'Transaction added', data: { name, description, datetime } });
//     res.json(req.body);
// })







// console.log('Starting server...');
// const express = require('express');
// const app = express();

// app.get('/api/test', (req, res) => {
//     console.log('Received request to /api/test');
//     res.json({ message: 'test ok' });
// });

// app.listen(4040, () => {
//     console.log('Server running on http://localhost:4040');
// });