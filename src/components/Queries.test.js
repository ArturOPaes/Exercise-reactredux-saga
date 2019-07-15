/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Queries from './Queries';

describe('Queries component ', () => {
  const props = {
    queries: [
      {
        source: '011',
        destiny: '016',
        minutes: 30,
        planName: 'FalaMais30',
        withPlan: 0,
        noPlan: 32,
      },
    ],
  };
  it('should render the row of table', () => {
    const app = mount(<Queries {...props} />);
    expect(toJson(app)).toMatchSnapshot();
  });

  it('should test the function format', () => {
    const wrapper = shallow(<Queries {...props} />);
    expect(wrapper.instance().format(1000.0)).toEqual('R$ 1.000,00');
  });
});
