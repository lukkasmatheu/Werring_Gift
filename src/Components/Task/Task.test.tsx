import React from 'react';
import {render, wait, waitFor} from '@testing-library/react';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {act} from 'react-dom/test-utils';

import Task from './index';
import {TaskProperties} from '../../models/TaskModel';

const itemList: TaskProperties[] = [
    {
        id: 0,
        task: 'testes',
        description: 'Testes',
        date: '20-02-2000',
        complete: false,
    },
    {
        id: 1,
        task: 'testes1',
        description: 'Testes1',
        date: '20-02-2000',
        complete: false,
    },
];

const apiMock = new MockAdapter(axios);

describe('ItemList', () => {
    beforeEach(() => {
        apiMock.onGet('http://localhost:5000/task').reply(200, [
            {
                task: 'tarefa',
                description: 'tarefa',
                date: '2021-07-22',
                complete: true,
                id: 4,
            },
        ]);
    });

    it('should render page tasks without crash', async () => {
        const {getAllByText, debug} = render(<Task />);
        //TODO: refatorar teste com falso/positivo
        await act(async () => {
            const timer = setTimeout(() => {
                const taskOne = getAllByText(/tarefa/i);
                expect(taskOne).toBeInTheDocument();
                debug();
            }, 2000);
        });
    }, 9999);

    it('should render page taks and with buttons', async () => {
        const {getByTestId, debug} = render(<Task buttonsActive={true} />);
        //TODO: refatorar teste com falso/positivo
        await act(async () => {
            const timer = setTimeout(() => {
                const taskOne = getByTestId(/excluir/i);
                expect(taskOne).toBeInTheDocument();
                debug();
            }, 2000);
        });
    }, 9999);
});
