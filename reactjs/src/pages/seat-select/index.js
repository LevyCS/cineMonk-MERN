import Cabecalho from "../../components/cabecalho";
import { ContainerBackground } from "../../components/common/styled";
import EachRow from "./eachRow";
import { Container } from './styled'



export default function SeatSelect() {
    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione os melhores lugares' />
            <Container>
                <div className='Container2'>
                    <EachRow type='4'/>
                    <EachRow type='4'/>
                    <EachRow type='4'/>
                    <EachRow />
                    <EachRow />
                    <EachRow />
                    <EachRow />
                    <EachRow type='a'/>
                </div>
            </Container>
        </ContainerBackground>
    )
}