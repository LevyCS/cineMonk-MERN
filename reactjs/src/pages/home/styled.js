import styled from 'styled-components'

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .em {
        font-size: 1.25em;
        margin: 2.5rem 0 7rem 0;
    }
`

const ContainerBox = styled.button`
    :hover {
        transform: 0.6s;
        background: #961B1B;
    }

    background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
    box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 54px;
    border: 0px solid transparent;
    padding: 3rem 0rem 2.5rem 0rem;

    color: white;
    font-size: 2.5em;
    max-width: 300px;
   
    

    font-family: 'Share Tech';
    text-transform: uppercase;
    color: #E1E1E1;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    cursor: pointer;

`

export { ContainerHome, ContainerBox}