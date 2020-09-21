import React from 'react';
import { MemoryRouter } from 'react-router';
import AdminDashboard from './AdminDashboard';
import App from '../../App';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Admin Dashboard', () => {
    it('Admin Dashboard components should be present in /admin-dashboard', () => {
        const component = mount(<MemoryRouter initialEntries={["/admin-dashboard"]}>
            <App />
        </MemoryRouter>
        );
        expect(component.contains(AdminDashboard));
    })
})
