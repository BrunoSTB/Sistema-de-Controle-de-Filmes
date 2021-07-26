const db = require("./knex");

// Inserir novos filmes
function inserir_Novo_Filme(titulo) {
    return db('filmes').insert(titulo, 0);
}

// Ler a lista de filmes cadastrados
function ver_Filmes_Cadastrados() {
    return db('filmes').select('*');
}


// Inserir novos espectadores
function inserir_Novo_Espectador(nome) {
    return db('espectadores').insert(nome, 0);
}

// Ler a lista de espectadores cadastrados
function ver_Espectadores_Cadastrados() {
    return db('espectadores').select('*');
}


// Marcar que um espectador viu um filme
function marcar_Filme_Visto(nome_e_Titulo) {

    // Encontra id do espectador e do filme
    const id_Do_Espectador = db('espectadores')
                                .select('id')
                                .where({  'nome': nome_e_Titulo['nome']  });

    const id_Do_Filme = db('filmes')
                            .select('id')
                            .where({  'titulo': nome_e_Titulo['titulo']  });


    // Encerra a função adicionando na lista de filmes assistidos o id do espectador e do filme
    return db('filmes_Assistidos').insert({ espectador_id: id_Do_Espectador, filme_id: id_Do_Filme });
}


// Seleciona todos os filmes vistos pelo espectador em questão
function historico_De_Filmes(nome) {
    const id = db('espectadores').select('id').where({ 'nome': nome['nome'] });
    return db('filmes_Assistidos').select('*').where({ espectador_id: id });
}

// Seleciona todos os espectadores que o filme em questão teve
function checar_Visualizacoes(titulo) {
    const id = db('filmes').select('id').where({  'titulo': titulo['titulo']  });
    return db('filmes_Assistidos').select('*').where({ filme_id: id });
}


// Exporta as funções
module.exports = {
    inserir_Novo_Filme,
    ver_Filmes_Cadastrados,
    inserir_Novo_Espectador,
    ver_Espectadores_Cadastrados,
    marcar_Filme_Visto,
    historico_De_Filmes,
    checar_Visualizacoes
}