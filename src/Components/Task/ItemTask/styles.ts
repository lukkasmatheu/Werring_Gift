import styled from 'styled-components';

export const List = styled.li<{ complete?: boolean, open?: boolean }>`
    width: 95%;
    list-style: none;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #c7cdce;
    text-decoration: none;
    background: ${(props) => (props.complete ? '#28c8289e' : '#e5ece5')};
    overflow-wrap: anywhere;
    div {
        margin: 0;
    }
    p {
        margin: 5px 0;
    }
    h4 {
        margin: 0;
    }
    .description {
        ${(props) => (props.open ? 'display:none' : '')};
        padding: 3px 8px;
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid ${(props) => (props.complete ? '#28c8289e' : '#dae0da')};
    border-radius: 4px;
    background: ${(props) => (props.complete ? '#28c8289e' : '#e5ece5')};
    padding: 3px 8px;
`;
