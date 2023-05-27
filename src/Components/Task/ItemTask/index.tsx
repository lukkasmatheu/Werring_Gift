import React, {useState} from 'react';

import {TaskProperties} from '../../../models/TaskModel';

import {List, Container} from './styles';

const ItemList: React.FC<TaskProperties> = ({
    id,
    task,
    description,
    date,
    complete,
    children,
}) => {
    const [open, setOpen] = useState<boolean>(true);
    return (
        <List complete={complete} open={open} id={id}>
            <Container
                complete={complete}
                onClick={() => {
                    setOpen(!open);
                }}>
                <div className={'task'}>
                    <h4>Tarefa:</h4>
                    <p>{task}</p>
                    <span>{date}</span>
                </div>
                {children}
            </Container>
            <div className={'description'}>
                <div>
                    <h4>Descrição:</h4>
                    <p>{description}</p>
                </div>
            </div>
        </List>
    );
};

export default ItemList;
