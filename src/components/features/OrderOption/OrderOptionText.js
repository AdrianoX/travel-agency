import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input className={styles.input}
      type='text' onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText; 






// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './OrderOption.scss';

// const OrderOptionText = ({name}) => (                          // <---- second option w/o using setOptionValue
//   <div>
//     <input
//       className={styles}
//       type="text"
//       value={name}
//     >
//     </input>
//   </div>
// );

// OrderOptionText.propTypes = {
//   name: PropTypes.string,
// };

// export default OrderOptionText;