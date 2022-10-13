import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home component', () => {

  it('should render the home page without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).not.toBeNull();
  });

});