import { Container } from './selection-styled'



export default function Selection() {
    return (
        <Container>
            <div> A1 </div>
            <select name='select'> 
                <option value='meia'> Meia </option>
                <option value='inteira'> Inteira </option>
            </select>          
        </Container>
    )
}