
const SessoesDatabase = require('../database/sessoesDatabase')
const db = new SessoesDatabase();

class SessoesService {
    availableDays() {
        return db.availableDays();
    }

    availableMovies(day) {
        return db.availableMovies(day);
    }

    availableSession(day, movie) {
        return db.availableSession(day, movie)
    }
}

module.exports = SessoesService;