import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';


const select = {
  title: '.title',
};

const mockProps = {
  days: 13,
};

describe('Component DaysToSummer', () =>{
  it('Should render component without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });

  it('should recive title from mockProps', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    expect(component.find(select.title).text()).toEqual('13 days to summer !');
  });

  
});
