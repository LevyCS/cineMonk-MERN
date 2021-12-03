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

export { ContainerBackground, LogoText, Paragraph }