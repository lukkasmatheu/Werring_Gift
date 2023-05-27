import styled from 'styled-components';

export const ButtonStyles = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    border: none;
    margin: 1px;
    border-radius: 10px;
    background: none;
    //transition: 200ms;
    &:hover,
    &:focus {
        border: 1px solid rgba(9, 159, 45, 0.79);
        margin: 0;
        background: #282C34;
    }
    img {
        width: 38px;
        height: 38px;
    }
`;
