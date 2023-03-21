import { MemoryRouter } from 'react-router-dom';

describe('Navbar component', () => {
  // let component
  // beforeEach(() => { wrapper: render(<MemoryRouter><Navbar /></MemoryRouter>); });

  it('renders a closed menu bar without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).not.toBeNull();
  });

  it('renders a closed menu with class nav-close', () => {
    const wrapper = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(wrapper.find('.nav-close').length).toEqual(1);
  });

  it('renders a dropdown menu when the hamburger button is clicked', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const toggle = wrapper.find('.toggle-btn').at(1).simulate('click');
    expect(toggle.length).toEqual(4);
  });
});
