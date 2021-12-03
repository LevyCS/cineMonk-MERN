import { Container } from './movie-box-styled'
import {Link} from 'react-router-dom'

export default function MovieBox (props) {
    return (
        <div>
            <Link to='/session' state={props.info} >
                <Container>
                    <img src={props.info.imagem} alt='' />
                    <div className='Text'>
                        <div> {props.info.titulo } </div>
                        <div> {props.info.dub }</div>
                        <div> Classificação: +{props.info.classificacao} </div>
                    </div>
                </Container>
            </Link>
        </div>
)
}