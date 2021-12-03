import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import DataSelect from './pages/data-select'
import MovieSelect from './pages/movie-select'
import DateTimeMovie from './pages/datetimeFilm-select'

export default function Rout () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dates" element={<DataSelect /> } />
                <Route path="movie" element={<MovieSelect /> } />
                <Route path="session" element={<DateTimeMovie />} />
            </Routes>
        </BrowserRouter>
    )
}