import { useNavigate } from 'react-router'
import { LogoText, Paragraph } from '../styled'
import { Container } from './styled'


export default function Cabecalho (props) {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="Logo" onClick={() => navigate('/')}>
                <img src="/src/assets/images/ticketLogo.png" alt="" />
                <LogoText> CineMonk </LogoText>
            </div>
            <div className="Text"> 
                <Paragraph> {props.frase} </Paragraph>
            </div>
        </Container>
    )
}