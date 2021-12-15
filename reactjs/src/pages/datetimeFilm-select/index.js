import { ContainerBackground } from "../../components/common/styled";
import Cabecalho from "../../components/common/cabecalho";
import { Container } from "./styled";
import BoxMovie from "../../components/common/boxMovie/boxMovie";
import DateTimeBox from "./datetimeBox";
import { useLocation } from "react-router";
import Api from "../../service/apiSessoes";
import { useState } from "react";
const api = new Api();


export default function DateTimeMovie() {
    const location = useLocation();

    const [hours, setHours] = useState([]);

    const movieName = location.state.filme.nome;
    const selectedDay = location.state.data

    const availableHours = async() => {
        let r = await api.availableSession(selectedDay, movieName)
        setHours(r);
    }

    useState(() => {
        availableHours()
    }, [])

    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione o horário e o idioma'/>
            <Container>
                <div className='boxMovie'>
                    <BoxMovie info={location.state.filme}/>
                </div>
                <div className='DateTime'> 
                    <div className='UpperBox'>
                        {hours.slice(0, 3).map(item => {
                            return <div> <DateTimeBox info={location.state} horarios={item}/> </div>       
                        })}
                    </div>
                    <div className='BottomBox'>
                        {hours.slice(3, 7).map(item => {
                                return <div> <DateTimeBox info={location.state} horarios={item}/> </div>       
                            })}
                    </div>
                </div>
            </Container>
        </ContainerBackground>
    )
}