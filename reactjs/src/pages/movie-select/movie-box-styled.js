import styled from 'styled-components'

const Container = styled.div`
    :hover {
        transform: 0.6s;
        background: #961B1B;
    }

    display: flex;
    flex-direction: row;
    align-items: center;

    height: 25vh;
    width: 40vh;
    background: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-radius: 16px 16px 0px 0px;
    padding: 5px;

    img {
        border-radius: 16px 0px 0px 0px;    
        align-self: center;
        height: 24vh;
        width: 40%;
    }

    .Text {
        margin-left: 1.5rem;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Share Tech;

        div:first-child {
            font-size: 1.5em;
            color: #FFCA76;
            margin-bottom: 1.5rem;
        }

        div:not(:first-child) {
            font-size: 1.2em;
        }
    }

    @media (max-width: 1024px) {
        height: 20vh;
        width: 30vh;

        img {
            height: 19vh;
        }
    }
`

export { Container }