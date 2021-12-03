
import { Link } from 'react-router-dom';
import { BigBoxContainer, SmallBoxContainer } from './boxes-styled'

const getDayOfWeek = (date) => {
    const day = new Date(date).getDay();

    switch (day) {
        case 0: return 'Segunda';
        case 1: return 'Terça';
        case 2: return 'Quarta';
        case 3: return 'Quinta';
        case 4: return 'Sexta';
        case 5: return 'Sábado';
        case 7: return 'Domingo';
        default: return 'Inválido';
    }
}

const getMonth = (month) => {
    month = Number(month);
    switch (month) {
        case 1: return 'Janeiro'; 
        case 2: return 'Fevereiro'; 
        case 3: return 'Março';
        case 4: return 'Maio';
        case 5: return 'Abril';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
        default: return 'Inválido';
    }
}

export function BigBox (props){
    return (
        <div>
            <Link to='/movie'>
                <BigBoxContainer>
                    <div> hoje </div>
                    <div> {props.date.split('-')[2]} </div>
                    <div> {getMonth(props.date.split('-')[1])} </div>
                </BigBoxContainer>
            </Link>
        </div>
    )
}

export function SmallBox(props) {
    return (
        <div>
            <Link to='/movie'>
                <SmallBoxContainer>
                    <div> { getDayOfWeek(props.date) }</div>
                    <div> {props.date.split('-')[2]} </div>
                    <div> {getMonth(props.date.split('-')[1])} </div>
                </SmallBoxContainer>
            </Link>
        </div>
        
    )
}