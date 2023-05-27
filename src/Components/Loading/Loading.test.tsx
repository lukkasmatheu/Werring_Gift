import React from 'react';
import {render} from '@testing-library/react';
import Loading from './index';

describe('Loading', () => {
    it('should render Loading without crash', () => {
        render(<Loading />);
    });
});
