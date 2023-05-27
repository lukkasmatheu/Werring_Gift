import React from 'react';
import { render } from '@testing-library/react';
import ItemList from './index';

describe('ItemList', () => {
    it('should render page home without crash', () => {
        const { getAllByText } = render(
            <ItemList
                id={0}
                task={'testes'}
                description={'Testes'}
                date={'20-02-2000'}
                complete={false}
            />,
        );

        const task = getAllByText(/testes/i);
        expect(task).toBeTruthy();
    });
});
