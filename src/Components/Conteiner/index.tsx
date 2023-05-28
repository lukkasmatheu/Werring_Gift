import React from 'react';
import { Container } from './styles';

const casalName = "Vinicius & Susana"

interface ContainerProps {
    header?: string;
    children?: React.ReactNode;
    image?: any;
}

const BoxConteiner: React.FC<ContainerProps> = ({ header, children, image }) => {

    return (
        <Container image={image}>
            <img src={image} alt="" className='imageBanner' />
            <header>{header}</header>
            <p className='casalName'>{casalName}</p>
            {children}
        </Container>
    );
};

export default BoxConteiner;
