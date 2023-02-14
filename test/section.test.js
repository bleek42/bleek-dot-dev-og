import React from 'react';
import { shallow } from 'enzyme';
import About from '/src/pages/about/index.tsx';

describe('About component', () => {
  it('should render the About page without crashing', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).not.toBeNull();
  });
});
