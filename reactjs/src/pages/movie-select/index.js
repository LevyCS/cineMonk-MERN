import { ContainerBackground } from "../../components/common/styled";
import Cabecalho from '../../components/common/cabecalho'
import MovieBox from "./movie-box";
import { ContainerMovies } from "./styled";

const apiSimulation = {
    'imagem': 'https://image.made-in-china.com/202f0j10SuQRndvhLWqK/New-Isuzu-Giga-8X4-Chassis-and-Cabin-380-and-420-and-460-HP.jpg',
    'titulo': 'Caminhão muito brabo',
    'dub': 'Lengadado e Dublado',
    'classificacao': 18
}

let mapear = []
for (let x = 0; x < 20; x++) {
    mapear.push(x);
}

export default function MovieSelect() {
    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione o filme que deseja assistir'/>
            <ContainerMovies>
                <div className='Container2'>
                    {mapear.map(i => {
                        return <div> <MovieBox key={i} info={apiSimulation} /> </div>
                    })}
                </div>
            </ContainerMovies>
        </ContainerBackground>
    )
}