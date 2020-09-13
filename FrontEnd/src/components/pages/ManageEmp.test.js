import React from 'react';
import { MemoryRouter } from 'react-router';
import ManageEmp from './ManageEmp';
import EmpDetails from './EmpDetails';
import App from '../../App';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Manage Employeees route', () => {
  it('should show ManageEmp components for /manage-emp router (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries={["/manage-emp"]}>
      <App />
    </MemoryRouter>
    );
    expect(component.contains(ManageEmp));
  });

  it('should have existing buttons', () => {
    const wrapper = shallow(<ManageEmp />);
    const button = wrapper.find('button');
    expect(button.exists());
  });

  it('should render components correctly', () => {
    const component = shallow(<ManageEmp />);
    expect(component).toMatchSnapshot();
  });

  it('should have a valid link to the Employee Details page', () => {
    const component = mount(<MemoryRouter initialEntries={["/emp-details"]}>
      <App />
    </MemoryRouter>
    );
    expect(component.contains(EmpDetails));
    expect(component.find('Link').exists());
  });
});
