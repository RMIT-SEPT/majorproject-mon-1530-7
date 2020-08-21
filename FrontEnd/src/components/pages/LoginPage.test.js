import React from 'react';
import {MemoryRouter} from 'react-router';
import LoginPage from './LoginPage';
import App from '../../App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
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
  })
