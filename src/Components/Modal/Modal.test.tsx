import React from 'react';
import {render} from '@testing-library/react';
import Modal from './index';

describe('Modal', () => {
    it('should render Modal without crash', () => {
        render(<Modal />);
    });
});
