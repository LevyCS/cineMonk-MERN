
const express = require('express')
const server = express();

const cors = require('cors')
server.use(cors());
server.use(express.json())

const SessoesController = require('./src/controller/sessoesController')
server.use('/sessoes', SessoesController)


function startServer(conn) {
    const db = require('./src/database/sessoesDatabase')
    db.injectDB(conn)

    server.listen(process.env.PORT, 
        x => console.log(`Subiu na porta ${process.env.PORT}`))
}

const MongoDB = require('mongodb').MongoClient;

MongoDB.connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net')
    .then(startServer)
    .catch(e => {
        console.log(e);
        process.exit(-1);
    })