import { Client} from 'faunadb';

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY
})


// Para ter acesso ao banco de dados