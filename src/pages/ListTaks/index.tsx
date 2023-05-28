import React from 'react';
import BoxConteiner from '../../Components/Conteiner';
import Task from '../../Components/Task';
import Presente from '../../assets/presente.svg'
const ListTask: React.FC = () => {
    return (
        <BoxConteiner header={'Lista de Presentes'} image={Presente}>
            <Task />
        </BoxConteiner>
    );
};

export default ListTask;
