import React from 'react';
import {MemoryRouter} from 'react-router';
import HomePage from './HomePage';
import App from '../../App';
import {mount, shallow} from 'enzyme';
import toJSON from 'enzyme-to-json'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing HomePage route', () => {
    it('Ensures HomePage cotains the correct information from the coresponding route', () => {
      const component = mount( <MemoryRouter initialEntries={["/"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(HomePage));
    })

    it('renders correctly', () => {
      const wrapper = shallow(<HomePage />)

      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
      shallow(<HomePage />);
    });
  })

