import styled from 'styled-components';

export const Container = styled.div<{ image: any }>`
    width: 99%;
    height: 100vh;
    margin: 0 auto;
    background: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        font-family: 'Raleway';
        color: #717171;
        font-size: 2.5rem;
    }
    .imageBanner{
        width:350px;
        margin-bottom: -50px;
    }
    .casalName{
        font-family: 'Send Flowers', cursive;
        font-size: 30px;
        margin: 0;
    }
`;
