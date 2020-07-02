import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';


// const select = {
//   title: '.title',
//   promoDescription: '.promoDescription',
// };

const mockProps = {
  title: 'Count days to summer', // 34PR
};

const trueDate = Date;
const mockDate = customDate => class extends Date {   // HappyHourAd.test / Test2
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

describe('Componbentt DaysToSummer', () => {
  it('should render correct without any crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const checkDescriptionAtDate = (date, expectedDescription) => {    //
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);    // change global time for date / 000Z

    const component = shallow(<DaysToSummer {...mockProps}/>);
    const renderedDays = component.find('.title').text();
    expect(renderedDays).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mockDate(000Z)', () => {
  checkDescriptionAtDate('2019-06-09', '12 days to summer : )');
  checkDescriptionAtDate('2019-06-20', '1 day to summer :D !');
  checkDescriptionAtDate('2019-11-30', '204 days to summer : ]');
  checkDescriptionAtDate('2019-10-29', '236 days to summer : ]');
});

// import React from 'react';
// import {shallow} from 'enzyme';
// import DaysToSummer from './DaysToSummer';


// const select = {
//   title: '.title',
// };

// const mockProps = {
//   days: 13,
// };

// describe('Component DaysToSummer', () =>{
//   it('Should render component without crashing', () => {
//     const component = shallow(<DaysToSummer />);
//     expect(component).toBeTruthy();
//   });

//   it('should render title', () => {
//     const component = shallow(<DaysToSummer />);
//     expect(component.exists(select.title)).toEqual(true);
//   });

//   it('should recive title from mockProps', () => {
//     const component = shallow(<DaysToSummer {...mockProps} />);
//     expect(component.find(select.title).text()).toEqual('13 days to summer !');
//   });


// });

