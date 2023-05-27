import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    button {
        width: 100%;
        height: 2.5rem;
        border: 2px solid #cccccc;
        border-radius: 5px;
        margin-top: 10px;
        &:focus,
        &:hover {
            background: #19d646e6;
            border: 2px solid #19d646e6;
        }
    }
    textarea {
        resize: none;
    }
    input {
        height: 2rem;
    }
    label {
        margin-top: 10px;
    }
    textarea,
    input {
        padding: 2px;
        border-radius: 5px;
        outline: none;
        border: 2px solid #cccccc;
        &:focus {
            border: 2px solid #19d646e6;
        }
    }
`;
