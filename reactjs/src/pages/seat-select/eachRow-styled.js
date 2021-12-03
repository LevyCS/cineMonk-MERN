import styled from "styled-components"; 

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    .Fileira {
        width: 3em;
        height: 3em;

        margin-right: 5vw;
    }

    .Box {
        width: 3rem;
        height: 3rem;

        background: #AA0A0A;
        border-radius: 13px;

        position: absolute;
    }

    .Letra {
        color: #FFFFFF;
        font-size: 1.75em;
        font-family: Spartan;
        font-weight: 700;

        position: relative;
       
        left: 0.75rem;
        top: 0.5rem;
    }

    .Cadeiras {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;

        > div {
            display: flex;
            flex-direction: row;
        }

    }


`

export { Container }