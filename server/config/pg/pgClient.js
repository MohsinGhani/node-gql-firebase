const { Client } = require('pg');

const connectionString = "postgres://postgres:123456@localhost:5432/test";

const client = new Client({
    connectionString: connectionString,
})

client.connect()

exports.client = client;