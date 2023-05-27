import axios, {AxiosResponse} from 'axios';
import {TaskProperties} from '../models/TaskModel';

const path = `http://localhost:5000/task`;

export interface TaskResponse {
    tasks: TaskProperties[];
}

export const getTasks = (): Promise<AxiosResponse<TaskProperties[]>> => {
    return axios.get(path);
};

export const postTask = (
    task: string,
    description: string,
    date: string,
): Promise<AxiosResponse<TaskResponse>> => {
    return axios.post(path, {task, description, date, complete: false});
};

export const patchTask = (id: number): Promise<AxiosResponse<TaskResponse>> => {
    return axios.patch(path + `/${id}`, {complete: true});
};

export const deleteTask = (
    id: number,
): Promise<AxiosResponse<TaskResponse>> => {
    return axios.delete(path + `/${id}`);
};
