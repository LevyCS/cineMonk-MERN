const express = require('express');
const Router = express.Router();

const SessoesService = require('../service/sessoesService')
const service = new SessoesService();

// TryCatch format
// try {

// } catch(e) {
//     resp.status(400).send({erro: e})
// }

Router.get('/availableDays', async (req, resp) => {
    try {
        let r = await service.availableDays();
        resp.send(r);
    } catch(e) {
        resp.status(400).send({erro: e.toString()})
    }
}) 

Router.get('/availableMovies', async (req, resp) => {
    // query params
    // ?day=&page=
    try {
        let r = await service.availableMovies(req.query.day, req.query.page)
        resp.send(r);
    } catch(e) {
        resp.status(400).send({erro: e.toString()})
    }
})

Router.get('/availableSession', async (req, resp) => {
    try {
        let { day, movie, page } = req.query
        let r = await service.availableSession(day, movie, page)
        resp.send(r)
    } catch(e) {
        resp.status(400).send({erro: e.toString()})
    }
}) 

Router.get('/cover', async (req, resp) => {
    let { imagePath } = req.query;

    let dirname = path.resolve();
    resp.sendFile(imagePath, { root: path.join(dirname) })
});



module.exports = Router;