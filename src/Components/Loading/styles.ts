import styled, {keyframes} from 'styled-components';

export const Main = styled.div`
    width: 50vw;
    margin: 30px auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
`;

export const mymoveOne = keyframes`
    0%{top:0;transform: translate(10px);transform: rotate(90deg);}
    50%{top:50%;}
    100%{top:0;transform: rotate(-90deg);}
`;

export const mymoveTwo = keyframes`
    0%{top:0;transform: translate(10px);transform: rotate(90deg);}
    50%{top:40%;}
    75%{top:30%;}
    100%{top:0;transform: rotate(-90deg);}
`;
export const mymoveThree = keyframes`
    0%{top:0;transform: rotate(90deg);}
    50%{top:30%;}
    75%{top:50%;}
    100%{top:0%;transform: rotate(-90deg);}
`;

export const Bar = styled.span`
    width: 5px;
    height: 20px;
    margin-left: 3px;
    position: absolute;
    border-radius: 4px;
    background: green;
    transition: 3ms;
    &#cool-1 {
        top: 0;
        left: 0;
        animation: ${mymoveOne} 1s infinite;
    }
    &#cool-2 {
        top: 50%;
        left: 38%;
        animation: ${mymoveTwo} 1s infinite;
    }
    &#cool-3 {
        top: 25%;
        right: 10%;
        animation: ${mymoveThree} 1s infinite;
    }
`;
