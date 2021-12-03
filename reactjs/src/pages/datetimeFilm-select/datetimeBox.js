import { Container } from './datetimeBox-styled'
import { Link } from 'react-router-dom'


export default function DateTimeBox() {
    return (
        <Container>
            <div>
                <Link to='/session'>
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