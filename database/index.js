const { Sequelize } = require('sequelize')
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);




const checkConnection = async () => {

    try {
        await connection.authenticate();
        console.log('connection to database has been started successfully')
        
    } catch (error) {

        console.log("error in connection");
        throw new Error(error)
       
        
    }
}


const checkSyncModels = async () => {

    const state = {
      alter: { alter: true },
      force: { force: true },
    };

    try {

        await connection.sync();
        console.log('modells syncronished successfully with database')
        
    } catch (error) {

         console.log("error to syncronish modells");
         throw new Error(error);
       
        
    }

}

module.exports = { connection, checkConnection,checkSyncModels };