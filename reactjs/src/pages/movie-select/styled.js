import styled from 'styled-components'


const ContainerMovies = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5rem;

    .Container2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1500px;
    }


    .Container2 > div {
        margin-right: 2rem;
        margin-bottom: 2rem;

        :nth-child(3n), :last-child {
            margin-right: 0px;
        }
    }
`

export { ContainerMovies }

