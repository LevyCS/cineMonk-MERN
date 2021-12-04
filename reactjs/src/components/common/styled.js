import styled from 'styled-components'

const ContainerBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('/src/assets/images/cineMonkBG.png');
    background-position: center bottom;
    background-size: cover;
    overflow-y: auto;
    `

const LogoText = styled.div`
    color: #F0A124;
    font-size: 4rem;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);

    font-family: 'SeoulHangang';
`

const Paragraph = styled.div`
    color: #E1E1E1;
    text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);
    font-size: 3em;
    
    font-family: 'Share Tech';
`

const GrayButton = styled.button`
    background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
    outline: none;
    height: 14.5vh;
    width: 14.5vh;
    border-radius: 50%;
    border: 1px solid transparent;

    color: #626262;
    text-shadow: 0px 4px 10px rgba(108, 108, 108, 0.25);
    font-family: Roboto;
    font-weight: 700;
    font-size: 2em;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: capitalize;

    :hover {
        background: radial-gradient(50% 50% at 50% 50%, #C4C4C4 0%, #C4C4C4 100%);
    }
`

export const DarkGrayButton = styled.button`
    background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
    outline: none;
    height: 14.5vh;
    width: 14.5vh;
    border-radius: 50%;
    border: 1px solid transparent;

    color: #767676;
    text-shadow: 0px 4px 10px rgba(108, 108, 108, 0.25);
    font-family: Roboto;
    font-weight: 700;
    font-size: 2.5em;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: capitalize;

    :hover {
        background: radial-gradient(50% 50% at 50% 50%, #C4C4C4 0%, #C4C4C4 100%);
    }
`

export { ContainerBackground, LogoText, Paragraph, GrayButton }