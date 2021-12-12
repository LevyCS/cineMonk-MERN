import { Container } from './datetimeBox-styled'
import { Link } from 'react-router-dom'


export default function DateTimeBox(props) {
    const hour = props.horario.horarios
    console.log(hour)
    return (
        <Container>
            <div>
                <Link to='/seat' state= {props.info}>
                    <Container>
                        <div> Sala: {hour.sala} </div>
                        <div> {hour.hora} </div>
                        <div> {hour.audio} </div>
                    </Container>
                </Link>
            </div>
        </Container>
    )
}