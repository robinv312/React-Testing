import { shallow } from 'enzyme';

import React from 'react';
import App from './App';
import Footer from './components/Footer';
import {Ticket} from './components/Ticket';

it('should render Ticket and footer', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);
    const ticket = wrapper.find(Ticket);
    expect(footer.exists()).toBe(true);
    expect(ticket.exists()).toBe(true);
})