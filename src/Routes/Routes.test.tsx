import React from 'react';
import {render} from '@testing-library/react';
import Routes from './Routes';

describe('Routes test', () => {
    it('should render Routes without crash', () => {
        render(<Routes />);
    });
});
