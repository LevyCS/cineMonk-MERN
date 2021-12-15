
const LugaresDatabase = require('../database/lugaresDatabase');
const db = new LugaresDatabase();

class LugaresService {
    availableSeats(day, movie, hour, room) {
        return db.availableSeats(day, movie, hour, room);
    }

    reserveSeat(day, movie, hour, room, letter, number, user) {
        db.reserveSeat(day, movie, hour, room, letter, number, user)
    }
}

module.exports = LugaresService