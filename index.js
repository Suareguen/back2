require('dotenv').config()
const { connection, checkConnection,checkSyncModels } = require('./database/index')
const { addRelationshipsModells } = require ('./database/relationships.js')
const express = require ('express')
const morgan = require('morgan');
const cors = require('cors')

const fullConnection = async () => {
    
    try {

        await checkConnection()
        addRelationshipsModells()
        await checkSyncModels('force')
    } catch (error) {
        console.log('error')
        throw new Error(error)
    }
}

const initializeExpress = () => {

    try {

        const app = express()
            .use(cors())
            .use(morgan('dev'))
            .use(express.json())
            .use('/api',require('./api/router'))
            .listen(3000, () => {
                console.log('listening on port 3000')
            })

        
    } catch (error) {

        console.log("error");
        throw new Error(error);
        
        
    }

}


const startAPI = async () => {

    try {

        await fullConnection()
        initializeExpress()
        
    } catch (error) {

        console.log('error to start the API')
        throw new Error(error)
        
    }


}
startAPI()