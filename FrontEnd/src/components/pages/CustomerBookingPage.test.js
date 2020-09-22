import React from 'react';
import {MemoryRouter} from 'react-router';
import CustomerBookingPage from './CustomerBookingPage';
import App from '../../App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing CustomerBookingPage route', () => {
    it("should show CustomerBookingPage component for /booking router (using memory router)", () => {
      const component = mount(
        <MemoryRouter initialEntries={["/booking"]}>
          <App />
        </MemoryRouter>
      );
      expect(component.contains(CustomerBookingPage));
    });
  })
