import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

it('renders a div with router components', () => {
  shallow(<MemoryRouter>
    <App />
  </MemoryRouter>)
});
