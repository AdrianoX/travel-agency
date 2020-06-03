import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render component without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render title nad description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });


  //   it('should render correct title and countdown', () => {
  //     const expectedTitle = 'Lorem ipsum';
  //     const expectedCountdown = '20';
  //     const component = shallow(<HappyHourAd title={expectedTitle} countdown={expectedCountdown} />);

  //     const renderedTitle = component.find('.title').text();
  //     expect(renderedTitle).toEqual(expectedTitle);
  //     expect(component.find('.title').prop('countdown')).toEqual(expectedCountdown);
  //   });


});     














