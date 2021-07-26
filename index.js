const express = require("express");
const app = express();
const db = require('./db/funcoes');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Inserir novos filmes
app.post('/filmes', async (req, res) => {
    const resultado = await db.inserir_Novo_Filme(req.body);
    res.status(201).json({ id: resultado[0] });
});

// Ler a lista de filmes cadastrados
app.get('/filmes', async (req, res) => {
    const Filmes = await db.ver_Filmes_Cadastrados();
    res.status(200).json({ Filmes });
});



// Inserir novos espectadores
app.post('/espectadores', async (req, res) => {
    const resultado = await db.inserir_Novo_Espectador(req.body);
    res.status(201).json({ id: resultado[0] })
});

// Ler a lista de espectadores cadastrados
app.get('/espectadores', async (req, res) => {
    const Espectadores = await db.ver_Espectadores_Cadastrados();
    res.status(200).json({ Espectadores });
});



// Marcar que um espectador viu um filme
app.post('/assistidos', async (req, res) => {
    const resultado = await db.marcar_Filme_Visto(req.body);
    res.status(201).json({ resultado });
});


// Ver quantos filmes um espectador assistiu
app.post('/historico_de_filmes', async (req, res) => {
    const lista = await db.historico_De_Filmes(req.body);
    res.status(200).send(`Total de filmes vistos: ${JSON.stringify(lista.length)}`);
});

// Ver quantos espectadores um filme teve
app.post('/visualizacoes', async (req, res) => {
    const lista = await db.checar_Visualizacoes(req.body);
    res.status(200).send(`Total de visualizações: ${JSON.stringify(lista.length)}`);
});


// Inicializa a porta
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

