import React, {Suspense, lazy, useEffect, useState} from 'react';
import {deleteTask, getTasks, patchTask} from '../../services/api';

import {TaskProperties} from '../../models/TaskModel';
import Button from '../Button';

import concluir from '../../assets/concluir.svg';
import excluir from '../../assets/excluir.svg';

import {ButtonContainer, TaskList} from './styles';
import Loading from '../../Components/Loading';

const ItemList = lazy(() => import('./ItemTask/index'));

interface Tasksprop {
    buttonsActive?: boolean;
}

const Task: React.FC<Tasksprop> = ({buttonsActive = false}) => {
    const [tasks, setTasks] = useState<TaskProperties[]>([]);
    const concluirTask = (index, id) => {
        patchTask(id)
            .then(() => {
                const arr = Array.from(tasks);
                arr[index].complete = true;
                setTasks(arr);
            })
            .catch((err) => console.error(err));
    };
    const excluirTask = (index, id) => {
        deleteTask(id)
            .then(() => {
                const arr = Array.from(tasks);
                arr.splice(index, 1);
                setTasks(arr);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        getTasks()
            .then((res) => {
                console.log(res.data);
                return res.data;
            })
            .then((res) => {
                setTasks(res);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <TaskList>
            {tasks.map(({id, task, description, date, complete}, index) => (
                <Suspense fallback={<Loading />} key={id}>
                    <ItemList
                        key={id}
                        id={id}
                        task={task}
                        description={description}
                        date={date}
                        complete={complete}>
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
