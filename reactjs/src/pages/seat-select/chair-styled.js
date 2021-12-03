import styled from "styled-components";

const Container = styled.div`
    width: 3em;
    height: 3em;
    

    div {
        color: #FFFFFF;
        font-family: Spartan;
        font-weight: 700;
        font-size: 0.875em;
        display: flex;
        align-items: center;
        width: 95%;
        justify-content: center;
        height: 100%;
        position: relative;
    }


    background-image: url('/src/assets/images/blackChair.png');
`

const ContainerEmptyChair = styled.div`
    width: 3em;
    height: 3em;
`

export { Container, ContainerEmptyChair }