import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';


describe('Component OrderOption', () => {
  it('should render component correctly', () => {
    const expectedName = 'Trip';
    const expectedType = 'text';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  //    or

  //   it('should render component correctly', () => {
  //     const component = shallow(<OrderOption name='Lorem Lorem Lorem' type='text' />);
  //     expect(component).toBeTruthy();
  //     // console.log(component.debug());
  //   });
  
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });



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

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};
  
const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};
  
const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;
    
    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
    //   console.log(component.debug());
    //   console.log(subcomponent.debug());
    });

    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
            
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);
            
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      
      case 'icon': {
        it('contains div with icon class', () => {
          const classIcon = renderedSubcomponent.find('.icon');
          expect(classIcon.length).toBe(2);
        });

        it('should test our function on click', () => {
          renderedSubcomponent.find('.icon').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue });
        });
        break;
      }

      case 'number': {
        it('contains div with (number) input', () => {
          const number = renderedSubcomponent.find('input[type="number"]');
          expect(number.length).toBe(1);

          const emptyOption = number.find('option[value=""]').length;
          expect(emptyOption).toBe(0);
        });

        it('contains select and options', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValueNumber });
        });
        break;
      }
      

      case 'text': {
        it('contains select and options', () => {
          const text = renderedSubcomponent.find('input[type="text"]');
          expect(text.length).toBe(1);

          const emptyOption = text.find('option[value=""]').length;
          expect(emptyOption).toBe(0);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue });
        });
        break;
      }

      case 'date': {
        it('contains DatePicker component', () => {
          const datePicker = renderedSubcomponent.find(DatePicker);
          expect(datePicker.length).toBe(1);
        //   expect(renderedSubcomponent.find(DatePicker).length).toBe(1);    ?? v2 ??
        });
  
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue });
        });
        break;
      }

      case 'checkbox': {
        it('contains div with class/input type checkbox', () => {
          const divClass = 'checkboxes';
          const inputType = 'checkbox';
  
          const div = renderedSubcomponent.find('div');
          expect(div.find('.checkboxes').text()).toEqual(divClass);
          expect(div.find('input').prop('type')).toEqual(inputType);
        });

        it('contains div with class/input type checkbox', () => {
          renderedSubcomponent.find('input').at(1).simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: [mockProps.currentValue], testValue});

        });
        break;
      }
    }
  });
}