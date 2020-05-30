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



















});