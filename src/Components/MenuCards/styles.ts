import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

const animationBorder = keyframes`
    0%{
        box-shadow: -1px 1px 4px 0.6px rgba(9, 159, 45, 0.79);
    }
    50%{
        box-shadow: 1px 1px 4px 0.15px rgba(9, 159, 45, 1);
    }
    100%{
        box-shadow: -1px -1px -1px 0.15px rgba(9, 159, 45, 1);
    }

`;

export const Card = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 240px;
    height: 200px;
    outline: none;
    text-decoration: none;
    text-align: center;
    border: 2px solid #e3dfdf;
    border-radius: 4px;
    color: #5e5b5b;
    transition: 450ms;
    &:hover,
    &:focus {
        border: 2px solid rgba(9, 159, 45, 0.79);
        /* animation: ${animationBorder} 2s ease-in-out infinite; */
    }
    img {
        width: 140px;
        height: 110px;
    }
`;
