import React from 'react';
import BoxConteiner from '../../Components/Conteiner';
import Task from '../../Components/Task';
import Loading from '../../Components/Loading';
const ListTask: React.FC = () => {
    return (
        <BoxConteiner header={'Listar Tarefas'}>
            <Task />
        </BoxConteiner>
    );
};

export default ListTask;
