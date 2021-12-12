import { ContainerBackground } from "../../components/common/styled";
import Cabecalho from '../../components/common/cabecalho'
import MovieBox from "./movie-box";
import { ContainerMovies } from "./styled";
import { useState } from "react";
import Api from "../../service/apiSessoes";
import { useLocation } from "react-router-dom";

const api = new Api();

export default function MovieSelect() {
    const [movies, setMovies] = useState([]);

    const location = useLocation();
    const selectedDay = location.state;

    const getMovies = async () => {
        let r = await api.availableMovies(selectedDay);
        setMovies(r);
    }

    useState(() => {
        getMovies();
    }, [])

    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione o filme que deseja assistir'/>
            <ContainerMovies>
                <div className='Container2'>
                    {movies.map((item, i) => {
                        return <div> <MovieBox key={i} info={item} /> </div>
                    })}
                </div>
            </ContainerMovies>
        </ContainerBackground>
    )
}