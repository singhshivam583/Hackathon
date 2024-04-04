import mysql from 'mysql'

const dbConnect = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "ecart",
})

export default dbConnect;