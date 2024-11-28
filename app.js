const express = require('express');
const app = express();
const PORT = 3000;
const users = [
{nome: "Seu josé", idade: 94, naturalidade: 'Mossoró'},
{nome: "Joel", idade: 40, naturalidade: 'São Pedro'},
{nome: "Maria", idade: 35, naturalidade: 'Macaíba'},
{nome: "Alexandre o Grande", idade: 150, naturalidade: 'Roma'}
]
app.get('/', (req, res)=>{
    res.send('Hello World Docker');
})
app.get('/users', (req,res)=>{
    res.json(users);
})
app.listen(PORT, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORT}`);
})