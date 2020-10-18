import React from 'react';
import { MemoryRouter } from 'react-router';
import App from '../../App';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminPastBookingLayout from '../layouts/AdminPastBookingLayout';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Admin Past Bookings', () => {
    it('Admin Past Booking table components should be present ', () => {
        const component = mount(<MemoryRouter initialEntries={["/admin-past-bookings"]}>
            <App />
        </MemoryRouter>
        );
        expect(component.contains(AdminPastBookingLayout));
    })
})
