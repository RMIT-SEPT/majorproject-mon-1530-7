import React from 'react';
import {MemoryRouter} from 'react-router';
import AboutPage from './AboutPage';
import App from '../../App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing AboutPage route', () => {
    it('Should show the AboutPage in full when at the correct directory', () => {
      const component = mount( <MemoryRouter initialEntries={["/about"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(AboutPage));
    })
  })