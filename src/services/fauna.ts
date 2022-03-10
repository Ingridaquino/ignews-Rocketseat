import { Client } from 'faunadb';

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
    domain: 'db.us.fauna.com',
    scheme: 'https',

})


// Para ter acesso ao banco de dados