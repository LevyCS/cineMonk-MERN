import styled  from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .boxMovie {
        
    }

    .DateTime {
        display: flex;
        flex-direction: column;

    }

    .UpperBox {
        margin-bottom: 1rem;
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
`

export { Container }