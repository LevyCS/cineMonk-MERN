import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3rem 5% 0 5%;

    .Logo {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            margin-right: 2rem;
        }

        cursor: pointer;
    }

    .Text {
        display: flex;
        color: white;
        flex-grow: 1;
        justify-content: center;
        text-align: center;
    }
`

export { Container }