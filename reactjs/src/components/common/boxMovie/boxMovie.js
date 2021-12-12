import { Container } from './boxMovie-styled'

export default function BoxMovie(props) {

    const getImage = (img) => {
        let r = `http://localhost:3030/sessoes/cover?imagePath=${img}`
        return r;
    }

    return (
        
        <Container> 
            <img src={getImage(props.info.capa)} alt='' />
            <div className='Text'>
                <div> {props.info.nome } </div>
                <div> {props.info.idiomas }</div>
                <div> Classificação: {props.info.classificacao} </div>
            </div>
        </Container>
    )
}