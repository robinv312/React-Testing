import { shallow } from 'enzyme';
import {Ticket} from './Ticket';
import React from 'react';

it("It should increment total when clicking the button",()=>{

    const wrapper = shallow(<Ticket/>);
    const totalInitial = wrapper.find('h2.total').text();
    expect(totalInitial).toBe("0");

    const button = wrapper.find('button');
    button.simulate('click');
    button.simulate('click');
    const totalClick= wrapper.find('h2.total').text();
    expect(totalClick).toBe("2");

});

it('should render ticket name in title',()=>{
    const wrapper = shallow(<Ticket name={'NHL tickets'}/>);
    const title =wrapper.find('h2.title').text();
    expect(title).toBe('NHL tickets');

});