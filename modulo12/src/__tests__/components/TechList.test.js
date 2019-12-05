import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import TechList from '../../components/TechList'

describe('TechList Component' , () => {
    beforeEach(() => {
        localStorage.clear(); 
    })

    it('should be able to add new tech' , () => {
        //renderizando um HTML fake com o component techlist
        const { getByText, getByTestId , debug, getByLabelText} = render(<TechList />);

        fireEvent.change(getByLabelText('Tech'), {target : {value : 'Node.js'}})
        fireEvent.submit(getByTestId('tech-form'));

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
        expect(getByLabelText('Tech')).toHaveValue('');
    })

    it('should store techs in storage' , () => {
        let { getByText, getByTestId , debug, getByLabelText} = render(<TechList />);

        fireEvent.change(getByLabelText('Tech'), {target : {value : 'Node.js'}})
        fireEvent.submit(getByTestId('tech-form'));

        cleanup();

        ({ getByText, getByTestId , debug, getByLabelText } = render(<TechList />));

        
        // const Json = JSON;
        
        expect(localStorage.setItem).toHaveBeenCalledWith('techs' , JSON.stringify(['Node.js']))
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
    })
})