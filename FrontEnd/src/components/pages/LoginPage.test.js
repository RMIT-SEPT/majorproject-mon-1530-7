import React from 'react';
import {MemoryRouter} from 'react-router';
import LoginPage from './LoginPage';
import App from '../../App';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing LoginPage route', () => {
    it('should show LoginPage component for /login router (using memory router)', () => {
      const component = mount( <MemoryRouter initialEntries={["/login"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(LoginPage));
    })

    it('renders correctly', () => {
      const wrapper = shallow(<LoginPage />)

      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  })


