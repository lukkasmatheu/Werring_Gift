import React from 'react';
import BoxConteiner from '../../Components/Conteiner';
import Task from '../../Components/Task';

import Modal from '../../Components/Modal';

const EditTask: React.FC = () => {
    return (
        <BoxConteiner header={'Listar Tarefas'}>
            <Task buttonsActive={true} />
        </BoxConteiner>
    );
};

export default EditTask;
