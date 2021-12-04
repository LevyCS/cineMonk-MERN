import { Container } from './datetimeBox-styled'
import { Link } from 'react-router-dom'


export default function DateTimeBox(props) {
    console.log(props.info);

    return (
        <Container>
            <div>
                <Link to='/seat' state= {props.info}>
                    <Container>
                        <div> Sala 08 </div>
                        <div> 13:00 </div>
                        <div> Legendado </div>
                    </Container>
                </Link>
            </div>
        </Container>
    )
}