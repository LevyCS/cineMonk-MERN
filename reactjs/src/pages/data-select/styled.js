import styled from 'styled-components'

const ContainerDataSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    margin-top: 1.75rem;

    a, a:link, a:visited, a:hover {
        text-decoration: none;
    }

    .Boxes {
        display: flex;
        flex-direction: row;
  
        margin-top: 7rem;
        align-items: center;
    }

    .BigBox {
        margin-right: 3rem;
    }

    .MiniBoxes {
        width: 100%;
    }

    .UpperBox, .BottomBox {
        display: flex;
        flex-direction: row;

        > div {
            margin-right: 1.5rem;

            :last-child {
                margin-right: 0;
            }
        }
    }

    .UpperBox > div {
        margin-bottom: 1rem;
    }

    
`

export { ContainerDataSelect }