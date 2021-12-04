import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .em {
        font-size: .75em;
        
        text-align: center;
        width: 100%;

        margin-top: 5vh;
        margin-bottom: 15vh;
    }

    .teste {
        display: flex;
        align-items: center;

        button:last-child {
            position: absolute;
            left: 85%;
        }
    }   

    .tickets {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;


        > div {
            margin-top: -20vh;
            display: flex;
            
        }
    }

`