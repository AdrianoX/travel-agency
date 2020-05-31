import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';


describe('Component OrderOption', () => {
  it('should render component correctly', () => {
    const expectedName = 'Trip';
    const expectedType = 'text';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  //    or

  //   it('should render component correctly', () => {
  //     const component = shallow(<OrderOption name='Lorem Lorem Lorem' type='text' />);
  //     expect(component).toBeTruthy();
  //     // console.log(component.debug());
  //   });

  it('Should render title with props name', () => {
    const expectedTitle = 'Country';
    const component = shallow(<OrderOption type={'text'} name={expectedTitle}/>);
    expect(component.find('.title').text()).toEqual(expectedTitle);
    // console.log(component.debug());
  });

});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};
  
for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;

    beforeEach(() => {
      component = shallow(
        <OrderOption
          type={type}
        />
      );
    });
    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      console.log(component.debug());
    });
    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}