import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact component', () => {

  it('renders the contact page without crashing', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).not.toBeNull();
  });

});