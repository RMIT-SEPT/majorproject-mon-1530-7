import React from 'react';
import {MemoryRouter} from 'react-router';
import CustomerBookingPage from './CustomerBookingPage';
import App from '../../App';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing CustomerBookingPage route', () => {
    it('should show CustomerBookingPage component for /customer-booking-page router (using memory router)', () => {
      const component = mount( <MemoryRouter initialEntries={["/customer-booking-page"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(CustomerBookingPage));
    })
  })
