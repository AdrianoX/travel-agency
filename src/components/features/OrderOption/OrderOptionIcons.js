import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div
    className={styles.icon}
  >
    {required ? '' : (
      <div
        className={styles.icon}
        value={currentValue}
        onChange={() => setOptionValue('')}
      >
        <Icon name={'times-circle'} />
        none
      </div>
    )}
    {values.map(value => (
      <div 
        className={currentValue === value.id ? styles.iconActive : styles.icon}
        key={value.id} 
        value={value.id}
        onClick= {() => (setOptionValue(value.id))}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  //   name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
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