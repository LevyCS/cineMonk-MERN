import { Container } from './boxMovie-styled'

export default function BoxMovie(props) {
    const movie = props.info;
    return (
        
        <Container> 
           <img src={movie.imagem} alt='' />
            <div className='Text'>
                <div> {movie.titulo} </div>
                <div> {movie.dub} </div>
                <div> Classificação: +{movie.classificacao} </div>
            </div>
        </Container>
    )
}