import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should generate link with correct adres', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
    // console.log(component.debug());
  });

  it('should generate correct src and alt for <img>', () => {
    const expectedSrc = 'image.jpg'; 
    const expectedAlt = 'image';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    // console.log(component.debug());
  });

  it('should render correct props: name, cost, days', () => {
    const expectedName= 'name';
    const expectedCost= '$66';
    const expectedDays= '7';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it ('should throw error without required props', () =>{
    expect(() => shallow(<TripSummary />).toEqual()); //.toThrow ?
  });

  it ('should render tags correctly', () => {
    const expectedTagArray = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTagArray} />);
    expect(component.find('.tag').at(0)).toEqual[expectedTagArray[0]]; // .find  => finds all elements)  then => .at => find specific (single) selector
    expect(component.find('.tag').at(1)).toEqual[expectedTagArray[1]];
    expect(component.find('.tag').at(2)).toEqual[expectedTagArray[2]];

  });

});

