import {Chair, EmptyChair} from "./chair";
import { Container } from "./eachRow-styled";




export default function EachRow(props) {
    return (
        <Container>
            <div className='Fileira'>
                <div className='Box'> </div>
                <div className='Letra'> A </div>
            </div>
            <div className='Cadeiras'>
                <div> 
                    <Chair />
                    <Chair />
                    <Chair />
                    {props.type === '4' ? <Chair /> : <EmptyChair />}
                </div>
                <div>
                    {props.type === 'a' ? <Chair /> : <EmptyChair />}
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    {props.type === 'a' ? <Chair /> : <EmptyChair />}
                </div>
                <div> 
                    {props.type === '4' ? <Chair /> : <EmptyChair />}
                    <Chair />
                    <Chair />
                    <Chair />
                </div>
            </div>
        </Container>
    )
}