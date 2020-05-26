import React from 'react';
import styles from './OrderSummary.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';




const OrderSummary = props => (

  <Grid>
    <Row>
      <Col xs={12}>
        <h2 className={styles.component}> Total: $
          <strong>{calculateTotal(formatPrice(props.tripCost), props.tripOptions)}</strong>
        </h2>
      </Col>
    </Row>
  </Grid>

);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};


export default OrderSummary;








// import React from 'react';
// import styles from './OrderSummary.scss';
// import PropTypes from 'prop-types';


// const OrderSummary = props => (

// <Grid>
//   <Row>
//     <Col xs={12}>
//      <h2 className={styles.component}>Total: <strong>$12,345</strong></h2>;
//     </Col>
//   </Row>
// </Grid>
//   );

// OrderSummary.propTypes = {

// };


// export default OrderSummary;

