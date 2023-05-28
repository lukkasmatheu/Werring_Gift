import styled from 'styled-components';

import backgroundImage from '../../assets/backgroundImage.jpg'

interface Props {
    o?: {
        fundo: string,
        largura: string,
        altura: string,
        cor: string
    }
}

export const Main = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img{
        width:35%;
    }
`;

export const Input = styled.input<Props>`
    padding: 5px;
    background: #f3f3f3f2;
    width: 220px;
    border: 2px double #80808069;
    border-radius: 4px;
    font-weight: 400;
    outline: none;
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
`;
