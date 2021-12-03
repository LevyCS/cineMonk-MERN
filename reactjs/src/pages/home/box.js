import { Link } from 'react-router-dom'
import { ContainerBox } from './styled'


export default function Box() {
    return (
        <Link to="/dates">
            <ContainerBox>
                Comprar Ingresso
            </ContainerBox>
        </Link>
    )
}