import styled from 'styled-components'

const BigBoxContainer = styled.div`
    :hover {
        transform: 0.6s;
        background: #961B1B;
    }

    background: #C60A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-radius: 16px;

    height: 20rem;
    width: 20rem;

    color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        font-family: 'SpaceMono';
        font-size: 3em;
        text-transform: uppercase;
        font-weight: 700;

        :nth-child(2) {
            font-family: 'Spartan';
            margin: 1rem 0px 1rem 0px;
            font-size: 4em;
        }
    }

    cursor: pointer;
`

const SmallBoxContainer = styled.div`
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
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;

        :first-child{
            text-transform: capitalize;
        }

        :nth-child(2) {
            font-family: 'Spartan';
            margin-top: 10px;
            font-size: 2.5em;
        }
    }

    cursor: pointer;
`

export { BigBoxContainer, SmallBoxContainer }