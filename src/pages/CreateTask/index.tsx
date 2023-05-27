import React, {useState} from 'react';
import BoxConteiner from '../../Components/Conteiner';
import {useHistory} from 'react-router-dom';
import {postTask} from '../../services/api';
import {Form} from './styles';

//TODO : refatorar modelo de form com formik

const CreateTask: React.FC = () => {
    const history = useHistory();
    const [taskDate, setTaskDate] = useState<string>();
    const [taskTitle, setTaskTitle] = useState<string>();
    const [taskDescription, setTaskDescription] = useState<string>();
    const handleSubmit = async () => {
        history.push('/');
        postTask(taskTitle, taskDescription, taskDate)
            .then(() => {
                alert('TAREFA CRIADA COM SUCESSO');
            })
            .catch(() => {
                alert('Error ao enviar tarefa');
                console.error('Error ao enviar pedido');
            });
    };
    return (
        <BoxConteiner header={'Criar Nova Tarefa'}>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="text-input">Qual é a tarefa:</label>
                <input
                    type="text"
                    name="text-input"
                    placeholder={'Tarefa a ser realizada'}
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value);
                    }}
                />

                <label htmlFor="text-input">Descrição da tarefa:</label>
                <textarea
                    id="text-input"
                    rows={10}
                    cols={55}
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value);
                    }}
                    placeholder={
                        'Insira uma descrição para a tarefa que deseja criar'
                    }
                />

                <label htmlFor="text-input">
                    Data de realização da tarefa:
                </label>
                <input
                    type="date"
                    name="data-input"
                    id="date"
                    min={new Date().toLocaleDateString()}
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value);
                    }}
                />

                <button type="submit" onSubmit={handleSubmit}>
                    {' '}
                    Adicionar
                </button>
            </Form>
        </BoxConteiner>
    );
};

export default CreateTask;
