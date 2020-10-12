import React from 'react';
import {mount} from 'enzyme';
import CustomerBookingPageErrorModal from './CustomerBookingPageErrorModal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing CustomerBookingPageErrorModal rendering', () => {
    it('Renders booking error modal content when the modal is open', () => {

        const wrapper = mount(<CustomerBookingPageErrorModal show={true}/>);
        
        expect(wrapper.find(CustomerBookingPageErrorModal).text()).toBe('Error×CloseThere was a problem with your bookingClose');
    })
  })