import React from 'react';
import { MemoryRouter } from 'react-router';
import AdminDashboard from './AdminDashboard';
import App from '../../App';
import { mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminDashboardLayout from '../layouts/AdminDashboardLayout';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Admin Dashboard', () => {
    it('Admin Dashboard components should be present in /admin-dashboard', () => {
        const component = mount(<MemoryRouter initialEntries={["/admin-dashboard"]}>
            <App />
        </MemoryRouter>
        );
        expect(component.contains(AdminDashboard));
    })

    it('renders correctly', () => {
        const wrapper = shallow(<AdminDashboard />)

        expect(toJSON(wrapper)).toMatchSnapshot();
      });

    it('checks admin dashboard layout form is present', () => {
      const wrapper = mount(<AdminDashboard />);

        expect(wrapper.contains(AdminDashboardLayout)).toEqual(true);
      });

    it('renders without crashing', () => {
        shallow(<AdminDashboard />);
      });
})
