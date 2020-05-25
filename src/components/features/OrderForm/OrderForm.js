import React from  'react';
// import PropTypes from 'prop-types';
import { Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = () => (


  <Row>
    <Col xs={12}>
      <OrderSummary  />
    </Col>
  </Row>




);


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

