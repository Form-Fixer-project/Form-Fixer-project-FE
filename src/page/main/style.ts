import { styled } from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }
`;


export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const MainContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`;

export const Image = styled.img<{ isVisible: boolean }>`
    width: 100%;
    height: 105%;
    margin-top: 0;
    position: absolute;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 1s ease-in-out;
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
`;

export const TitleContainer = styled.div`
    margin-bottom: 120px;
`;

export const Title = styled.div`
    font-size: 120px;
    font-weight: bold;
`;

export const SubTitle = styled.div`
    font-size: 60px;
    font-weight: 12;
`;

export const MainContentContainer = styled.div`
    display: flex;
    margin-bottom: 200px;
`;

export const MainContent = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    width: 200px;
    height: 170px;
    margin-right: 50px;
`;

export const MainContentE = styled.div`
    font-size: 36px;
    font-weight: 20px;
`;

export const MainContentK = styled.div`
    font-size: 26px;
    font-weight: 12px;
`;



export const About = styled.div`
    font-size: 32px;
    font-weight: bold;
`