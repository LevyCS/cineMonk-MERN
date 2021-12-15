const express = require('express');
const Router = express.Router();

const LugaresService = require('../service/lugaresService')
const service = new LugaresService();

Router.get('/availableSeats', async (req, resp) => {
    try {
        let { day, movie, hour, room } = req.query
        let res = await service.availableSeats(day, movie, hour, room);
        resp.send(res);
    } catch(e) {
        resp.status(400).send({erro: e.toString()})
    }
})



Router.put('/reserveSeat', async (req, resp) => {
    try {
        let {day, movie, hour, room, letter, number, user} = req.body
        await service.reserveSeat(day, movie, hour, room, letter, number, user);
        resp.sendStatus(200)
    } catch(e) {
        resp.status(400).send({erro: e.toString()})
    }
})



module.exports = Router;