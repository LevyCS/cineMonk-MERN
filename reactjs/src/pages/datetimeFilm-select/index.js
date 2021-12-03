import { ContainerBackground } from "../../components/common/styled";
import Cabecalho from "../../components/cabecalho";
import { Container } from "./styled";
import BoxMovie from "./boxMovie";
import DateTimeBox from "./datetimeBox";
import { useLocation } from "react-router";

export default function DateTimeMovie() {
    const location = useLocation();
    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione o horário e o idioma'/>
            <Container>
                <div className='boxMovie'>
                    <BoxMovie info={location.state}/>
                </div>
                <div className='DateTime'> 
                    <div className='UpperBox'>
                        <div> <DateTimeBox /> </div>
                        <div> <DateTimeBox /> </div>
                        <div> <DateTimeBox /> </div>
                    </div>
                    <div className='BottomBox'>
                        <div> <DateTimeBox /> </div>
                        <div> <DateTimeBox /> </div>
                        <div> <DateTimeBox /> </div>
                    </div>
                </div>
            </Container>
        </ContainerBackground>
    )
}