import React from 'react';
import {render} from '@testing-library/react';
import Home from './index';
import {Router} from 'react-router';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {createBrowserHistory} from 'history';
import {TaskProperties} from '../../models/TaskModel';

const apiMock = new MockAdapter(axios);

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

const history = createBrowserHistory();

describe('Home', () => {
    beforeEach(() => {
        apiMock.onGet('http://localhost:5000/task').reply(200, [...itemList]);
    });
    it('should render page home without crash', () => {
        render(
            <Router history={history}>
                <Home />
            </Router>,
        );
    }, 9999);
});
