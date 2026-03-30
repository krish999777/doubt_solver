import pkg from 'pg'
const {Pool}=pkg
const pool=new Pool({
    user: 'krishshah',
    host: 'localhost',
    database: 'doubt_solver',
    password: '',
    port: 5432,
})
export default pool