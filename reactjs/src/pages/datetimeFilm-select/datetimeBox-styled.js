import styled from 'styled-components'

const Container = styled.div`
    :hover {
        transform: 0.6s;
        background: #961B1B;
    }

    background: #AA0A0A;
    border-radius: 13px;

    height: 9.5rem;
    width: 9.5rem;

    color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        font-family: 'SpaceMono';
        font-weight: 700;
        text-transform: uppercase;

        :first-child{
            text-transform: capitalize;
        }

        :nth-child(2) {
            font-family: 'Spartan';
            margin-top: 10px;
            font-size: 2.4em;
        }
    }

    cursor: pointer;
`   

export { Container }