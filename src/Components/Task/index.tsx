import React, { Suspense, lazy, useEffect, useState } from 'react';

import { PresentesProperties } from '../../models/TaskModel';
import Button from '../Button';

import concluir from '../../assets/concluir.svg';
import excluir from '../../assets/excluir.svg';

import { ButtonContainer, TaskList } from './styles';
import Loading from '../../Components/Loading';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../App';

const ItemList = lazy(() => import('./ItemTask/index'));

interface Tasksprop {
    buttonsActive?: boolean;
}

const Task: React.FC<Tasksprop> = ({ buttonsActive = true }) => {
    const [presentes, setPresentes] = useState<PresentesProperties[]>([]);
    const concluirTask = (index: number, id: string) => {

        const arr = Array.from(presentes);
        arr[index].complete = true;
        setPresentes(arr);
    };
    const excluirTask = async (index: number, id: string) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        const arr = Array.from(presentes);
        arr.splice(index, 1);
        setPresentes(arr);
    };

    const colletionDataBase = collection(db, "presentes")

    useEffect(() => {
        const getPresentes = async () => {
            const data = await getDocs(colletionDataBase);
            const destructValue = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PresentesProperties[];
            setPresentes(destructValue)
        }
        getPresentes()
    }, [])

    return (
        <TaskList>
            {presentes.map(({ id,
                presente,
                descricao,
                complete,
                image,
                valor }
                , index) => (
                <Suspense fallback={<Loading />} key={id}>
                    <ItemList
                        id={id}
                        presente={presente}
                        descricao={descricao}
                        complete={complete}
                        image={image}
                        valor={valor}
                    >
                        {buttonsActive && (
                            <ButtonContainer>
                                {!complete && (
                                    <Button
                                        img={concluir}
                                        text={'concluir tarefa'}
                                        handleChange={() => {
                                            concluirTask(index, id);
                                        }}
                                    />
                                )}
                                <Button
                                    img={excluir}
                                    text={'excluir tarefa'}
                                    handleChange={() => {
                                        excluirTask(index, id);
                                    }}
                                />
                            </ButtonContainer>
                        )}
                    </ItemList>
                </Suspense>
            ))}
        </TaskList>
    );
};

export default Task;
