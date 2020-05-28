import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required}) => (
  <div
    className={styles.icon}
  >
    {required ? '' : (
      <div key='null' value='' className={styles.icon}>---</div>
    )}
    {values.map(value => (
      <div key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</div>
    ))}
  </div>
);





OrderOptionIcons.propTypes = {
  //   name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.string,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;






// const OrderOptionIcons =()=> {

//     return(
//       <div >OrderOptionIcons</div>
//     );
//   };

// import React from 'react';

// const OrderOptionIcons = () => {


//   <div OrderOptionIcons />;

// };





// export default OrderOptionIcons;