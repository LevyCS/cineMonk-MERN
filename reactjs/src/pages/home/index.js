import { ContainerBackground, Paragraph } from '../../components/common/styled'
import { ContainerHome } from './styled'
import Logo from './logo'
import Box from './box'

export default function Home () {
    return (
        <ContainerBackground>
            <ContainerHome>
                <Logo />
                <div className="em">
                    <Paragraph> O que você quer fazer? </Paragraph>
                </div>
                <Box />
            </ContainerHome>
        </ContainerBackground>
    )
}