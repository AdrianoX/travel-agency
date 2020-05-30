import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from  './TripSummary';


describe('Component TripSummary', () => {
  it('should generate link with correct adres', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
    console.log(component.debug());
  });

  it('should generate correct src and alt for <img>', () => {
    const expectedSrc = 'image.jpg'; 
    const expectedAlt = 'image';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    console.log(component.debug());
  });

  it('should render correct props: name, cost, days', () => {
    const expectedName= 'name';
    const expectedCost= '$66';
    const expectedDays= '7';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it ('should throw error without required props', () =>{
    expect(() => shallow(<TripSummary />).toEqual()); //.toThrow ?
  });

});