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

app.use(express.json());

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
        const {nome,idade,casa_hogwarts,patrono,habilidade,status_sangue,id_varinha} = req.body;
       await pool.query('INSERT INTO bruxos (nome,idade,casa_hogwarts,patrono,habilidade,status_sangue,id_varinha) VALUES ($1, $2, $3,$4,$5,$6,$7)', [nome,idade,casa_hogwarts,patrono,habilidade,status_sangue,id_varinha]);
       return res.status(201).send("Bruxo criado com sucesso");
    }catch(err){
        console.log(err);
    }
});
app.post('/varinha', async (req, res) => {
    try{
        const {material,tamanho,nucleo,data_fabricacao} = req.body;
        await pool.query('INSERT INTO varinha (material,tamanho,nucleo,data_fabricacao) VALUES ($1, $2, $3,$4)', [material,tamanho,nucleo,data_fabricacao]);
        return res.status(201).send("Varinha criada com sucesso");
    }catch(err){
        console.log(err);
    }
});
app.put('/varinha/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {material,tamanho,nucleo,data_fabricacao} = req.body;
        const result =  await pool.query('UPDATE varinha SET material = $1, tamanho = $2, nucleo = $3, data_fabricacao = $4 WHERE id = $5', [material,tamanho,nucleo,data_fabricacao,id]);
        if(result.rowCount == 0){
            return res.status(201).send("Varinha Nao existe");
        }
        return res.status(201).send("Varinha Atualizada com sucesso");
    }catch(err){
        console.log(err);
    }
});
app.put('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {nome,idade,casa_hogwarts,patrono,habilidade,status_sangue,id_varinha} = req.body;
   const result =   await pool.query('UPDATE bruxos SET nome = $1, idade = $2, casa_hogwarts = $3, patrono = $4, habilidade=$5, status_sangue = $6,  id_varinha = $7 WHERE id = $8', [nome,idade,casa_hogwarts,patrono,habilidade,status_sangue,id_varinha,id]);
if(result.rowCount == 0){
    return res.status(201).send("Bruxo Nao existe");
}
      return res.status(201).send("Bruxo Atualizado com sucesso");
    }catch(err){
        console.log(err);
    }
});
app.delete('/bruxos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const result = await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
       if(result.rowCount == 0){
        return res.status(201).send("Bruxo Nao existe");
    }
       return res.status(201).send("Bruxo Deletado com sucesso");
    }catch(err){
        console.log(err);
    }
});
app.delete('/varinha/:id', async (req, res) => {
    try{
        const {id} = req.params;
        
        await pool.query('DELETE FROM bruxos WHERE id_varinha = $1', [id]);
        const result = await pool.query('DELETE FROM varinha WHERE id = $1', [id]);
        if(result.rowCount == 0){
            return res.status(201).send("varinha Nao existe");
        }
        return res.status(201).send("Varinha e bruxo Deletados com sucesso");
    }catch(err){
        console.log(err);
    }
});




app.get("/", async (req, res) => {
    res.status(200).send({mensagem: "Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz. Harry Potter"});

});

