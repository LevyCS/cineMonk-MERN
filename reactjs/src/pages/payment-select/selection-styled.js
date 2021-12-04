import styled from "styled-components";

const Container = styled.div`

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: row;
    align-items: center;

    div:first-child {
        font-size: 1.5em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-right: 2rem;
    }

    select {
            background: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 26px;
            outline: none;
            width: 150px;
            height: 30px;

            color: #4F4F4F;
            font-family: Roboto;
            font-size: 1.25em;
            padding: 0px 20px;
            -webkit-appearance: none;
            background-image: url('/src/assets/images/setinha.png');
            background-repeat: no-repeat;
            background-position: right;
            background-position-x: 90%;
    }

    option {
        color: #4F4F4F;
        font-family: Roboto;
        font-size: 0.8em;
    }
`

export { Container }