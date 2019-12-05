import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react'

import TechList from '../../components/TechList'

import {addTech} from '../../store/modules/techs/actions'

jest.mock('react-redux');

describe('TechList Component' , () => {
    it('should render tech list' , () => {
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js' , 'ReactJS']
        }));

        const {getByText, getByTestId, debug} = render(<TechList/>);

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'))
    })

    it('should be able to add new tech', () => {
        const {getByLabelText , getByTestId} = render(<TechList/>)

        const dispatch = jest.fn();

        useDispatch.mockReturnValue(dispatch);

        fireEvent.change(getByLabelText('Tech') , {target : {value : 'Node.js'}});
        fireEvent.submit(getByTestId('tech-form'));
        
        expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'))
    })
})