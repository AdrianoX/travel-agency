import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
// import {setOrderOption} from '../../../redux/orderRedux';



const OrderForm = ({ options, tripCost, setOrderOption }) => (

  <Grid>
    <Row>
      {pricing.map(option =>
        <Col key={option.id} md={4}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      )}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
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

