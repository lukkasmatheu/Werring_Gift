import React from 'react';
import { render } from '@testing-library/react';
import BoxConteiner from './index';
import Button from './index';

describe('Button', () => {
    const func = jest.fn();

    it('should render Button without crash', () => {
        render(<Button />);
    });

    it('should render Button with properties', () => {
        render(<Button handleChange={func} text={'button'} />);
    });
});
