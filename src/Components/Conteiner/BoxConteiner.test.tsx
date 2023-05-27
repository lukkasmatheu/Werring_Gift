import React from 'react';
import {render} from '@testing-library/react';
import BoxConteiner from './index';

describe('BoxConteiner', () => {
    const children = '<h1>Hello World</h1>';
    it('should render page home without crash', () => {
        render(<BoxConteiner />);
    });

    it('should render page home with props', () => {
        const {getAllByText} = render(
            <BoxConteiner header={children}> {children} </BoxConteiner>,
        );
        const childrenText = getAllByText(/Hello World/i);
        expect(childrenText).toBeTruthy();
    });
});
