const { Sequelize } = require('sequelize')
const connection = new Sequelize(
  "if0_34686097_prueba",
  "if0_34686097",
  "BRCJheeiRFr ",
  {
    host: "mysql://sql211.infinityfree.com",
    dialect: "mysql",
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