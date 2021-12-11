
const SessoesDatabase = require('../database/sessoesDatabase')
const db = new SessoesDatabase();

class SessoesService {
    availableDays() {
        return db.availableDays();
    }

    availableMovies(day, page) {
        return db.availableMovies(day, page);
    }

    availableSession(day, movie, page) {
        return db.availableSession(day, movie, page)
    }
}

module.exports = SessoesService;