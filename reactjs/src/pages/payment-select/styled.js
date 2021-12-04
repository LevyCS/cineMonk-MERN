import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 7.5vh;
    
    .Movie {
        margin-right: 5rem;
    }

    .Payment {
        margin-top: 1.5rem;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Spartan;
        font-weight: 1000;

        display: flex;
        flex-direction: row;

        background: linear-gradient(180deg, #AA0A0A 0%, rgba(83, 0, 0, 0.92) 126.82%);
        border-radius: 10px;
        height: 39.5vh;
        width: 100%;
        padding: 2rem 0px;

        justify-content: space-evenly;

    
    }

    .parte2 {
        display: flex;
        flex-direction: column;
        width: 50%;

        > div:last-child {
            display: flex;
           justify-content: flex-end;
           margin-top: 2rem;
        }
    }

    .Lugares, .otherPart {
        overflow: auto;
        /* width: 50%;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center; */
    }

    .Lugares > div, .otherPart > div{
        :first-child {
            color: #FFB540;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 2.5em;
            margin-bottom: 2rem;
            text-align: center;
           
        }
    }

    .ingressos > div {
        margin-bottom: .5rem;

        :last-child {
            margin-bottom: 0px;
        }
    }

    .linha {
        border: 1px solid #5A1010;
       
    }

    .Pedido {
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        font-family: Spartan;
        font-weight: 700;
        font-size: 1.5em;
        
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;


        div:first-child {
            margin-bottom: .8rem;
        }
        
        > div > span {
            margin-left: 1.2rem;
        }
    }

    .otherPart {
        display: flex;
        flex-direction: column;
        
        .total {
            display: flex;
       
            justify-content: flex-end;
            height: 100%;
        }
    }

    .total {
        display: flex;
        align-self: flex-end;
        align-items: flex-end;
        justify-content: flex-end;

        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
        font-family: Spartan;
        font-weight: 700;
        font-size: 1.75em;

        > span {
            margin-left: .5rem;
        }
    }
    
`

export { Container }