import React, { useState } from 'react';
import BoxConteiner from '../../Components/Conteiner';
import { useNavigate } from 'react-router-dom';
import { Form } from './styles';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../App';


const CreateTask: React.FC = () => {
    const navigate = useNavigate();
    const [valorPresente, setValorPresente] = useState<string>();
    const [taskDate, setTaskDate] = useState<string>();
    const [taskTitle, setTaskTitle] = useState<string>();
    const [taskDescription, setTaskDescription] = useState<string>();
    const colletionDataBase = collection(db, "presentes")
    const handleSubmit = async () => {
        try {
            const presente = await addDoc(colletionDataBase, {
                presente: taskTitle,
                descricao: taskDescription,
                valor: valorPresente,
                complete: false,
                image: taskDate,
            });

            console.log("dados salvos com sucessos", presente);
            alert("solicitação de presente criado com sucesso");
        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            navigate('/');
        }
    };
    return (
        <BoxConteiner header={'Criar Nova Tarefa'}>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="text-input">Qual é o presente:</label>
                <input
                    type="text"
                    name="text-input"
                    placeholder={'Insira o presente que gostaria'}
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value);
                    }}
                />

                <label htmlFor="text-input">Descrição do Presente:</label>
                <textarea
                    id="text-input"
                    rows={10}
                    cols={55}
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value);
                    }}
                    placeholder={
                        'Insira uma descrição para a o presente que deseja receber'
                    }
                />

                <label htmlFor="text-input">
                    Imagem do Presente:
                </label>
                <input
                    type="input"
                    name="data-input"
                    placeholder='Insira um link da imagem do presente que gostaria'
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value);
                    }}
                />
                <label htmlFor="text-input">
                    Imagem do Presente:
                </label>
                <input
                    type="input"
                    name="data-input"
                    placeholder='Insira um valor aproximado do presente que deseja ganhar'
                    value={valorPresente}
                    onChange={(e) => {
                        setValorPresente(e.target.value);
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
