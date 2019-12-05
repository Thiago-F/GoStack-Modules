import React from 'react';
import {render} from '@testing-library/react';

import App from '../../App'

describe('App' , () => {
    it('should render app container in application' , () => {
        const {findAllByTestId} = render(<App/>)

        expect(findAllByTestId('app')).toBeTruthy();
    })
})