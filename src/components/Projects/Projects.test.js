import React from "react";
import { shallow, render, click } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Projects from "./Projects";

describe('Projects component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Projects />);
    expect(wrapper).not.toBeNull();
  });

});