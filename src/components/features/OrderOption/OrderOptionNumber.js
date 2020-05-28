import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption';



const OrderOptionNumber = ({limits, currentValue, setOptionValue }) => (

  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min} 
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />

  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};


export default OrderOptionNumber;









// const OrderOptionNumber =()=> {

//     return(
//       <div >OrderOptionNumber</div>
//     );
//   };

// export default OrderOptionNumber;

// import React from 'react';

// const OrderOptionNumber = () => {

    
//   <div OrderOptionNumber />;

// };





// export default OrderOptionNumber;