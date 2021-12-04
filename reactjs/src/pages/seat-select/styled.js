import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 60%;
    width: 100%;

    margin: 5% 0;

    .Container2 {
        padding: 2rem 5%;
        width: 80%;
        max-width: 1600px;
        height: 100%;
        background: rgba(198, 198, 198, 0.9);
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25), inset 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
        border-radius: 16px 16px 16px 0px;

        > a > div {
            margin-bottom: 1%;
        }

        > a > div:last-child {
            margin-top: 4%;
        }

        @media (max-width: 1024px) {
            padding: 2rem 1%;
        }
    }
`

export { Container }