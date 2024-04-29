const express= require('express');
const {Pool}= require('pg');

const app = express();
const PORT = 4000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'harrypotter',
    password: 'ds564',
    port: 7007,
});


app.listen(PORT, () => {
    console.log(`funcionando normalmente ${PORT}🚀`);
});

app.get('/bruxos', async (req, res) => {
   try{
         const result = await pool.query('SELECT * FROM bruxos;');
         res.json(result.rows);

   }catch(err){
       console.log(err);
   }
});
app.get('/varinha', async (req, res) => {
    try{
          const result = await pool.query('SELECT * FROM varinha;');
          res.json(result.rows);
 
    }catch(err){
        console.log(err);
    }
 });

app.get('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
        res.json(result.rows);
    }catch(err){
        console.log(err);
    }
});
app.get('/varinha/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM varinha WHERE id = $1', [id]);
        res.json(result.rows);
    }catch(err){
        console.log(err);
    }
});
app.post('/bruxos', async (req, res) => {
    try{
        const {mat,comp,nucl,data} = req.body;
        const result = await pool.query('INSERT INTO bruxos (material,tamanho,nucleo,data_fabricacao) VALUES ($1, $2, $3,$4)', [mat,comp,nucl,data]);
        res.json(result);
    }catch(err){
        console.log(err);
    }
});
app.post('/varinha', async (req, res) => {
    try{
        const {nome, idade, casa,patrono,sangue,varinhaid} = req.body;
        const result = await pool.query('INSERT INTO varinha () VALUES ($1, $2, $3,$4,$5,$6)', [nome, idade, casa,patrono,sangue,varinhaid]);
        res.json(result);
    }catch(err){
        console.log(err);
    }
});
app.put('/varinha/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {mat,comp,nucl,data} = req.body;
        const result = await pool.query('UPDATE varinha SET material = $1, tamanho = $2, nucleo = $3, data_fabricacao = $4 WHERE id = $5', [mat,comp,nucl,data,id]);
        res.json(result);
    }catch(err){
        console.log(err);
    }
});
app.put('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {nome, idade, casa,patrono,sangue,varinhaid} = req.body;
        const result = await pool.query('UPDATE bruxos SET nome = $1, idade = $2, casa = $3, patrono = $4, sangue = $5, varinhaid = $6 WHERE id = $7', [nome, idade, casa,patrono,sangue,varinhaid,id]);
        res.json(result);
    }catch(err){
        console.log(err);
    }
});
app.delete('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
        res.json(result);
    }catch(err){
        console.log(err);
    }
});
app.delete('/varinha/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await pool.query('DELETE FROM varinha WHERE id = $1', [id]);
        res.json(result);
    }catch(err){
        console.log(err);
    }
});

app.get("/", async (req, res) => {
    res.status(200).send({mensagem: "Servidor rodando"});
});

