import React from 'react';
import {MemoryRouter} from 'react-router';
import HomePage from './HomePage';
import App from '../../App';
import {mount} from 'enzyme';
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
  })

