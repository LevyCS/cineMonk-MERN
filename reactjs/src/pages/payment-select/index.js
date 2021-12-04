import { useLocation } from 'react-router'
import Cabecalho from '../../components/common/cabecalho'
import BoxMovie from '../../components/common/boxMovie/boxMovie'
import { ContainerBackground } from '../../components/common/styled'
import Selection from './selection'
import { Container } from './styled'

import { GrayButton } from '../../components/common/styled'
import { Link } from 'react-router-dom'



export default function PaymentScreen() {
    const location = useLocation();

    return (
        <ContainerBackground>
            <Cabecalho frase='Selecione a melhor opção de pagamento' />
            <Container>
                <div className='Movie'>
                    <BoxMovie info={location.state}/>
                </div>
                <div className='parte2'>
                    <div className='Payment'>
                        <div className='Lugares'>
                            <div> Lugares </div>
                            <div className='ingressos'>
                                <Selection />
                                <Selection />
                                <Selection />
                                <Selection />
                            </div>
                        </div>
                        <div className='linha'> </div>
                        <div className='otherPart'>
                            <div> Pedido </div> 
                            <div className='Pedido'> 
                                <div> Ingressos Meia: <span> 02 </span></div>
                                <div> Ingressos Inteira: <span> 03 </span></div>
                            </div>
                            <div className='total'> Total: R$ <span> 100,00 </span> </div>
                        </div>
                    </div>
                    <div>
                        <Link to='/finishbuy'>
                            <GrayButton> Concluir </GrayButton>   
                        </Link>     
                    </div>
                </div>
                
            </Container>
        </ContainerBackground>
    )
}