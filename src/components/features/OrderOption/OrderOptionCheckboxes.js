import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import OrderOptionNumber from './OrderOptionNumber';

// const newValueSet = (currentValue, id, checked) => {
//   if(checked){
//     return [
//       ...currentValue,
//       id,
//     ];
//   } else {
//     return currentValue.filter(value => value != id);
//   }
// };

const OrderOptionCheckboxes = values  => (
  <div className={styles.checkboxes}>

    {values.map(value => (
      <label key={value.id}>
        <input 
          type='checkbox' 
          value={value.id}
          // checked= ?????
          // onChange=?????
        >
        </input>
        {value.name} ({formatPrice(value.price)})

      </label>
    ))}
  </div>
);


OrderOptionNumber.propTypes = {
  values: PropTypes.array,
};

export default OrderOptionCheckboxes;


// import React from 'react';

// const OrderOptionCheckboxes = () => {

    
//   <div OrderOptionCheckboxes />;

// };


// export default OrderOptionCheckboxes;




