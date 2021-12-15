
const express = require('express')
const server = express();

const cors = require('cors')
server.use(cors());
server.use(express.json())

const SessoesController = require('./src/controller/sessoesController')
server.use('/sessoes', SessoesController)

const LugaresController = require('./src/controller/lugaresController')
server.use('/lugares', LugaresController)


function startServer(conn) {
    const sessoesDb = require('./src/database/sessoesDatabase')
    const lugaresDb = require('./src/database/lugaresDatabase')

    sessoesDb.injectDB(conn)
    lugaresDb.injectDB(conn)

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