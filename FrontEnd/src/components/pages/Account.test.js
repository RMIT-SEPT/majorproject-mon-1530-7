import React from 'react';
import { MemoryRouter } from 'react-router';
import Account from './Account';
import App from '../../App';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Account route', () => {
    it('should show Account component for /account router (using memory router)', () => {
        const component = mount(<MemoryRouter initialEntries={["/account"]}>
            <App />
        </MemoryRouter>
        );
        expect(component.contains(Account));
    })
})
