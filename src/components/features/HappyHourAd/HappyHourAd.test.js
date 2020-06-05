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
    // const checkTitle = mockProps.title;                                    // 1A
    // const checkPromoDescription = mockProps.promoDescription;              // 1A 
    // expect(component.find(select.title).text()).toEqual(checkTitle);                             //1A
    // expect(component.find(select.promoDescription).text()).toEqual(checkPromoDescription);        // 1A

    // or w/o using all const (checkTitle,CheckPromo...)

    expect(component.find(select.title).text()).toEqual(mockProps.title);
    // expect(component.find(select.promoDescription).text()).toEqual(mockProps.promoDescription);
  });

}); 



const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date and promoDescription', () => {
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:38:58', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});
