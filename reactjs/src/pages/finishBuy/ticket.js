import { Container } from "./ticket-styled"


export default function Ticket() {
    const titulo = 'FAWFWAfawfawfawfawfawffawefawfawfawfF'
    return (
        <Container>
            <img src='/src/assets/images/ticket-512 1.png' alt='' />
            <div className='info'>
                <div> A1 MEIA #864825684 </div>
                <div> 04/06/2021 17:02 </div>
                <div> {titulo.length >= 35 ? `${titulo.substr(0, 30)}...` : titulo} </div>
                <div> Dublado  Sala 08  13:00h </div>
            </div>
        </Container>
    )
}