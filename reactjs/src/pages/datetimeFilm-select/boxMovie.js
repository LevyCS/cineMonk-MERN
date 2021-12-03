import { Container } from './boxMovie-styled'

export default function BoxMovie(props) {
    const apiSimulation = {
        'imagem': 'https://image.made-in-china.com/202f0j10SuQRndvhLWqK/New-Isuzu-Giga-8X4-Chassis-and-Cabin-380-and-420-and-460-HP.jpg',
        'titulo': 'Caminhão muito brabo',
        'dub': 'Lengadado e Dublado',
        'classificacao': 18
    }
    return (
        

        <Container> 
           <img src='https://image.made-in-china.com/202f0j10SuQRndvhLWqK/New-Isuzu-Giga-8X4-Chassis-and-Cabin-380-and-420-and-460-HP.jpg' alt='' />
            <div className='Text'>
                <div> Caminhão muito brabo</div>
                <div> Lengadado e Dublado </div>
                <div> Classificação: +18 </div>
            </div>
        </Container>
    )
}