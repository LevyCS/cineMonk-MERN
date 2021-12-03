import { TopLogo } from './styled'
import { LogoText } from '../../components/common/styled'


export default function Logo() {
    return (
        <TopLogo>
            <img src= "/src/assets/images/ticketLogo.png" alt ="" />
            <LogoText> CineMonk </LogoText>
        </TopLogo>
    )
}