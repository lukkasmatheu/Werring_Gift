import React from 'react';
import {Container} from './styles';

interface ContainerProps {
    header?: string;
}

const BoxConteiner: React.FC<ContainerProps> = ({header, children}) => {
    return (
        <Container>
            <header>{header}</header>
            {children}
        </Container>
    );
};

export default BoxConteiner;
