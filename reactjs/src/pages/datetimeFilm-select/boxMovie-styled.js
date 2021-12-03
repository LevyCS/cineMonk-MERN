import styled from 'styled-components'

const Container = styled.div`
    background: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-radius: 16px 16px 16px 0px;
    max-width: 300px;
    width: 100%;


    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0px 5px;

    img {
        height: 40vh;
        margin: 5px;
        border-radius: 16px 16px 0px 0px;
        width: 100%;
    }

    .Text {
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Share Tech;
        text-align: center;
        margin-bottom: 2rem;

        div:first-child {
            font-size: 1.6em;
            color: #FFCA76;
            margin-bottom: 1.5rem;
            margin-top: 1rem;
        }

        div:not(:first-child) {
            font-size: 1.2em;
        }
    }
`

export { Container }