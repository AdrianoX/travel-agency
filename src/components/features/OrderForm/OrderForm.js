import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = props => (

  <Grid>
    <Row>
      {pricing.map(option =>
        <Col key={option.id} md={4}>
          <OrderOption {...option}/>
        </Col>
      )}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} tripOptions={props.options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;





// import React from  'react';
// import PropTypes from 'prop-types';
// import { Row, Col} from 'react-flexbox-grid';
// import OrderSummary from '../OrderSummary/OrderSummary';

// const OrderForm = props => (

//                 <=== with/without <grid> ?
//   <Row>
//     <Col xs={12}>
//       <OrderSummary tripCost={props.tripCost} />
//     </Col>
//   </Row>


// );

// OrderForm.propTypes = {
//     cost: PropTypes.string,
// }

// export default OrderForm;

