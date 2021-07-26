const knex = require('knex');

const connectedKnex = knex({
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "maindb.sqlite3"
    },
});

module.exports = connectedKnex;