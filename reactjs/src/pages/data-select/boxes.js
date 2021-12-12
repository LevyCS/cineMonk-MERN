
import { Link } from 'react-router-dom';
import { BigBoxContainer, SmallBoxContainer } from './boxes-styled'

export function BigBox(props){
    return (
        <div>
            <Link to='/movie' state={props.date.data}>
                <BigBoxContainer>
                    <div> {props.date.diaSemana} </div>
                    <div> {props.date.dia} </div>
                    <div> {props.date.mes} </div>
                </BigBoxContainer>
            </Link>
        </div>
    )
}

export function SmallBox(props) {
    const info = props.date
    return (
        <div>
            <Link to='/movie' state={info.data}>
                <SmallBoxContainer>
                    <div> {info.diaSemana} </div>
                    <div> {info.dia} </div>
                    <div> {info.mes} </div>
                </SmallBoxContainer>
            </Link>
        </div>
        
    )
}