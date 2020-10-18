import React from 'react';
import {MemoryRouter} from 'react-router';
import CustomerBookingPage from './CustomerBookingPage';
import App from '../../App';
import {mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ServiceCard from "../layouts/ServiceCard";
import StaffCard from "../layouts/StaffCard";
import TimeSelectorCard from "../layouts/TimeSelectorCard";

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

    it('checks service card is present', () => {
      const wrapper = mount(<CustomerBookingPage />);

      expect(wrapper.contains(ServiceCard)).toEqual(true);
    });

    it('checks staff card is present', () => {
      const wrapper = mount(<CustomerBookingPage />);

      expect(wrapper.contains(StaffCard)).toEqual(true);
    });

    it(' checks Time Selector Card is present', () => {
      const wrapper = mount(<CustomerBookingPage />);

      expect(wrapper.contains(TimeSelectorCard)).toEqual(true);
    });

  })
