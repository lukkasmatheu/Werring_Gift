import React, { useState } from 'react';

import { PresentesProperties } from '../../../models/TaskModel';

import { List, Container } from './styles';

const ItemList: React.FC<PresentesProperties> = ({
    id,
    presente,
    descricao,
    complete,
    image,
    valor,
    children
}) => {
    const [open, setOpen] = useState<boolean>(true);
    console.log(complete);
    return (
        <List complete={complete} open={open}>
            <Container
                complete={complete}
                onClick={() => {
                    setOpen(!open);
                }}>
                <div className={'task'}>
                    <h4>Presente:</h4>
                    <p>{presente}</p>
                    <span>{valor}</span>
                </div>
                {children}
            </Container>
            <div className={'description'}>
                <div>
                    <h4>Descrição:</h4>
                    <p>{descricao}</p>
                </div>
            </div>
        </List>
    );
};

export default ItemList;
