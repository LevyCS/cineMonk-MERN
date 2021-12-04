import { Link } from "react-router-dom";
import Logo from "../../components/common/logo/logo";
import { ContainerBackground, DarkGrayButton, Paragraph } from "../../components/common/styled";
import { Container } from "./styled";
import Ticket from "./ticket";



export default function FinishBuy() {
    const qtdTicket = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]

    return(
        <ContainerBackground>
            <Logo />
            <Container>
                <div className='em'>
                    <Paragraph> Parabéns! Sua compra foi realizada com sucesso. </Paragraph>
                    <Paragraph> Agora é só aproveitar o filme :) </Paragraph>
                </div>
                <div className='teste'>
                    <div className='tickets'>
                        {qtdTicket.map((item, i) => {
                            return <Ticket key={i} />
                        })}
                    </div>
                    <div> <Link to='/'> <DarkGrayButton> Menu </DarkGrayButton> </Link></div>
                        
                </div>
            </Container>
        </ContainerBackground>
    )
}