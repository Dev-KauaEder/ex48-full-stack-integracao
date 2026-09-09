const express = require('express');
const cors = require('cors');
const app = express();

// CORS: aceita requisições de http://localhost:3001
app.use(cors({ origin: 'http://localhost:3001' }));

app.use(express.json());
app.use(express.static('public'));

let tarefas = [];
let nextId = 1;

// GET /api/tarefas → 200 + array de tarefas
app.get('/api/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});

// POST /api/tarefas → 201 + tarefa criada
app.post('/api/tarefas', (req, res) => {
    const { titulo } = req.body;

    const tarefa = {
        id: nextId++,
        titulo: titulo
    };

    tarefas.push(tarefa);

    res.status(201).json(tarefa);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})