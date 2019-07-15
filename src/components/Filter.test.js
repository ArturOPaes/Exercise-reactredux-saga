/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Filter from './Filter';

const props = {
  plans: [{ id: '123', name: 'FalaMais30', amountMinPlan: 30 }],
  rates: [{ source: '011', destiny: '018' }],
  calculate: jest.fn(),
};
const state = {
  source: '011',
  destiny: '016',
  minutes: 30,
  plan: 'FalaMais30',
};
describe('Filter component ', () => {
  it('should render the component', () => {
    const app = mount(<Filter {...props} />);
    expect(toJson(app)).toMatchSnapshot();
  });

  it('should test the function completedFields', () => {
    const app = shallow(<Filter {...state} {...props} />);
    expect(toJson(app)).toMatchSnapshot();
  });
  /*
  it('Input should call handleChange', () => {
    const event = { target: { name: 'source', value: '011' } };
    const filter = mount(<Filter {...props} />);
    const handleChange = jest.spyOn(filter.instance(), 'handleChange');
    filter.update(); // <--- Needs this to force re-render
    const userInput = filter.find('source');

    userInput.simulate('change', event);

    expect(handleChange).toBeCalled();
  });

  it('Input should call onClick', () => {
    const event = { target: { name: 'source', value: '011' } };
    const filter = mount(<Filter {...state} {...props} />);
    const onClick = jest.spyOn(filter.instance(), 'onClick');
    filter.update(); // <--- Needs this to force re-render
    const userInput = filter.find('button');

    userInput.simulate('click', event);

    expect(onClick).toBeCalled();
  });
  */
});
