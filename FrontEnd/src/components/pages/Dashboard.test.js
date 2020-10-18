import React from 'react';
import { MemoryRouter } from 'react-router';
import Dashboard from './Dashboard';
import App from '../../App';
import {mount, shallow} from 'enzyme';
import toJSON from 'enzyme-to-json'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Dashboard route', () => {
    it('should show Dashboard component for /dashboard router (using memory router)', () => {
        const component = mount(<MemoryRouter initialEntries={["/dashboard"]}>
            <App />
        </MemoryRouter>
        );
        expect(component.contains(Dashboard));
    })

    it('renders correctly', () => {
        const wrapper = shallow(<Dashboard />)
  
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
  
})
