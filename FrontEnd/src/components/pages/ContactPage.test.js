import React from 'react';
import {MemoryRouter} from 'react-router';
import ContactPage from './ContactPage';
import App from '../../App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing ContactPage route', () => {
    it('Should show the Contact Page without errors', () => {
      const component = mount( <MemoryRouter initialEntries={["/contact"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(ContactPage));
    })
  })
