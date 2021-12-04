import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import { ContainerBackground } from "../../components/common/styled";
import EachRow from "./eachRow";
import { Container } from './styled'



export default function SeatSelect() {
    const location = useLocation();

    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione os melhores lugares' />
            <Container>
                
                <div className='Container2'>
                    <Link to='/payment' state={location.state}>
                        <EachRow type='4'/>
                        <EachRow type='4'/>
                        <EachRow type='4'/>
                        <EachRow />
                        <EachRow />
                        <EachRow />
                        <EachRow />
                        <EachRow type='a'/>
                    </Link>
                </div>
                
            </Container>
        </ContainerBackground>
    )
}