import pkg from 'pg'
const {Pool} = pkg

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'parker',
    password: 'postgres',
    port: 5434
})