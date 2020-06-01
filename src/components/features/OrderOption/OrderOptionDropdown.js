import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';




const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);


OrderOptionDropdown.propTypes = {
//   name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDropdown;















// const OrderOptionDropdown =()=> {

//   return(
//     <div >OrderOptionDropdown</div>
//   );
// };

// export default OrderOptionDropdown;



// import React from 'react';

// const OrderOptionDropdown = () => {

//   <div OrderOptionDropdown />;

// };





// export default OrderOptionDropdown;