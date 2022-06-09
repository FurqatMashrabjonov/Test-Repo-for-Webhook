const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgressdfsdf',
    database: 'pg'
})
//changed
//asdasdasdsadasdassadasd
const client = pool.client()
/dasdasdfsdfsdfcasdasdasdasdad
const {rows} = client.query('select * from users')
client.release()
console.log(rows)fsdf