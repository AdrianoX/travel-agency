import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

const mockProps = {
  title: 'Count days to summer',
};

const trueDate = Date;
const mockDate = customDate => class extends Date {
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

describe('Component DaysToSummer', () => {
  it('should render correct without any crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const checkDescriptionAtDate = (date, expectedDescription) => {    //
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

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

