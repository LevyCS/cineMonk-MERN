import { TopLogo } from './logo-styled'
import { LogoText } from '../styled'


export default function Logo() {
    return (
        <TopLogo>
            <img src= "/src/assets/images/ticketLogo.png" alt ="" />
            <LogoText> CineMonk </LogoText>
        </TopLogo>
    )
}