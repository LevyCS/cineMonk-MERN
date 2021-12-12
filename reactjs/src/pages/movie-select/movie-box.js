import { Container } from './movie-box-styled'
import {Link} from 'react-router-dom'

export default function MovieBox (props) {

    const getImage = (img) => {
        let r = `http://localhost:3030/sessoes/cover?imagePath=${img}`
        return r;
    }

    const movie = props.info.filme;

    return (
        <div>
            <Link to='/session' state={props.info} >
                <Container>
                    <img src={getImage(movie.capa)} alt='' />
                    <div className='Text'>
                        <div> {movie.nome } </div>
                        <div> {movie.idiomas }</div>
                        <div> Classificação: {movie.classificacao} </div>
                    </div>
                </Container>
            </Link>
        </div>
)
}