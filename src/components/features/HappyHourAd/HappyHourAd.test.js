import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'AwesomeTitle123',
  promoDescription: 'NewAwesomeTitle456',             // 1A
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

  it('should render title/desc from mockProps', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);             // 1A
    const checkTitle = mockProps.title;                                    // 1A
    const checkPromoDescription = mockProps.promoDescription;              // 1A 
    expect(component.find(select.title).text()).toEqual(checkTitle);                             //1A
    expect(component.find(select.promoDescription).text()).toEqual(checkPromoDescription);        // 1A

    // or w/o using all const (checkTitle,CheckPromo...)

    // expect(component.find(select.title).text()).toEqual(mockProps.title);
    // expect(component.find(select.promoDescription).text()).toEqual(mockProps.promoDescription);
  });


}); 



describe('Component HappyHourAd with mocked Date', () => {

});