import React from 'react';
import {ButtonStyles} from './styles';
export interface ButtonProperties {
    handleChange?: VoidFunction;
    img?: string;
    text?: string;
}

const Button: React.FC<ButtonProperties> = ({handleChange, img, text}) => {
    return (
        <ButtonStyles onClick={handleChange} data-testid={text}>
            <img src={img} alt={text} />
        </ButtonStyles>
    );
};
export default Button;
