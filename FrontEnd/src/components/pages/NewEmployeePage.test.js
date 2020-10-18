import React from 'react';
import {MemoryRouter} from 'react-router';
import NewEmployeePage from './NewEmployeePage';
import NewEmployeeForm from '../layouts/NewEmployeeForm';
import App from '../../App';
import {mount, shallow} from 'enzyme';
import toJSON from 'enzyme-to-json'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing NewEmployeePage route', () => {
    it('Ensures NewEmployeePage cotains the correct information from the coresponding route', () => {
      const component = mount( <MemoryRouter initialEntries={["/new-employee"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(NewEmployeePage));
    })

    it('renders correctly', () => {
      const wrapper = shallow(<NewEmployeePage />)

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('checks new employee form is present', () => {
      const wrapper = mount(<NewEmployeePage />);

      expect(wrapper.contains(NewEmployeeForm)).toEqual(true);
    });

    it('renders without crashing', () => {
      shallow(<NewEmployeePage />);
    });
  })

