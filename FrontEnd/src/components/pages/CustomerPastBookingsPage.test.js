import React from 'react';
import {MemoryRouter} from 'react-router';
import CustomerPastBookingsPage from './CustomerPastBookingsPage';
import App from '../../App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing CustomerPastBookingsPage route', () => {
    it('should show CustomerPastBookingsPage component for /customer-past-bookings router (using memory router)', () => {
      const component = mount( <MemoryRouter initialEntries={["/customer-past-bookings"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(CustomerPastBookingsPage));
    })
  })