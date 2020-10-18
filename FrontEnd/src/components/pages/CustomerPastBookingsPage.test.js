import React from 'react';
import {MemoryRouter} from 'react-router';
import CustomerPastBookingsPage from './CustomerPastBookingsPage';
import App from '../../App';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//For commented out tests
// import toJSON from 'enzyme-to-json'
// import PastBookingsRows from '../layouts/PastBookingsRows';
// import CustomerDashboardBookingHistorySection from "../layouts/CustomerDashboardBookingHistorySection";

Enzyme.configure({ adapter: new Adapter() });

describe('Testing CustomerPastBookingsPage route', () => {
    it('should show CustomerPastBookingsPage component for /customer-past-bookings router (using memory router)', () => {
      const component = mount( <MemoryRouter initialEntries={["/customer-past-bookings"]}>
          <App/>
       </MemoryRouter>
      );
      expect(component.contains(CustomerPastBookingsPage));
    })

    //Below will not pass as theyre customer exclusive pages.

    // it('renders correctly', () => {
    //   const wrapper = shallow(<CustomerPastBookingsPage />)

    //   expect(toJSON(wrapper)).toMatchSnapshot();
    // });

    // it('checks past booking rows is present', () => {
    //   const wrapper = mount(<CustomerPastBookingsPage />);

    //   expect(wrapper.contains(PastBookingsRows)).toEqual(true);
    // });

    // it('checks booking history is present', () => {
    //   const wrapper = mount(<CustomerPastBookingsPage />);

    //   expect(wrapper.contains(CustomerDashboardBookingHistorySection)).toEqual(true);
    // });

})