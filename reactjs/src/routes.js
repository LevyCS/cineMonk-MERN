import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import DataSelect from './pages/data-select'
import MovieSelect from './pages/movie-select'
import DateTimeMovie from './pages/datetimeFilm-select'
import SeatSelect from './pages/seat-select'
import PaymentScreen from './pages/payment-select'
import FinishBuy from './pages/finishBuy'

export default function Rout () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dates" element={<DataSelect /> } />
                <Route path="movie" element={<MovieSelect /> } />
                <Route path="session" element={<DateTimeMovie />} />
                <Route path='seat' element={<SeatSelect />} />
                <Route path='payment' element={<PaymentScreen />} />
                <Route path='finishbuy' element={<FinishBuy />} />
            </Routes>
        </BrowserRouter>
    )
}