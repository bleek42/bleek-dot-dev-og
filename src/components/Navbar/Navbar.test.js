import React from 'react';
import { shallow, render, click } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {

    it('renders a closed menu bar without crashing', () => {
        const navbar = shallow(<Navbar />);
        console.log(navbar.debug());
        const wrapper = navbar.find('.nav-close');
        expect(wrapper.length).toBe(1);
    });

    it('renders a dropdown menu when the hamburger button is clicked', () => {
        render(<MemoryRouter>
            <Navbar />
        </MemoryRouter>);
        click('button');
        expect();
    });
});