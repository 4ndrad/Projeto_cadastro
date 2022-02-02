const mysql = require('mysql2/promise');



const env = process.env;



const config = {
db: {
host: env.DB_HOST || 'db-mysql-nyc3-42554-do-user-6070522-0.b.db.ondigitalocean.com',
user: env.DB_USER || 'primetrainee',
password: env.DB_PASSWORD || 'PrimeTrainee@2022',
database: env.DB_NAME || 'primetrainee',
port: env.DB_PORT || '25060',
}
};



async function query(sql, params) {
const connection = await mysql.createConnection(config.db);
const [results, ] = await connection.execute(sql, params);



return results;
}



module.exports = {
query
}