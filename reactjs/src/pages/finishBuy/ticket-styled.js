import styled from "styled-components";

export const Container = styled.div`
    color: white;
    position: relative;

    box-sizing: border-box;


    .info {
        position: absolute;
        top: 35%;
        right: 15%;

        font-family: Share Tech;
        width: 50%;
        height: 30%;


        div:nth-child(1) {
            color: #960404;
            font-size: 1.125em;
        }

        div:nth-child(2) {
            color: #373737;
            font-size: 0.875em;
        }

        div:nth-child(3) {
            color: #000000;
            max-width: 80%;
            word-wrap: break-word;
            font-size: 1.25em;
            margin: 5px 0 7.5px 0;
        }

        div:nth-child(4) {
            color: #960404;
            font-size: 1.125em;
    
        }
    }

`
