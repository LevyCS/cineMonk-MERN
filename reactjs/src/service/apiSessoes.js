import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030/sessoes'
})

export default class Api {
    async availableDays() {
        let r = await api.get('/availableDays')
        return r.data;
    }

    async availableMovies(day, page) {
        let r = await api.get(`/availableMovies?day=${day}`)
        return r.data;
    }

    async availableSession(day, movie, page) {
        let r = await api.get(`/availableSession?day=${day}&movie=${movie}`)
        return r.data;
    }

    async getImage(image) {
        let r = await api.get(`/cover?imagePath=${image}`)
        return r;
    }
}