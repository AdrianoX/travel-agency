import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';



const mapStateToProps = state => ({
  options: getOrderOptions(state),

});



export default connect(mapStateToProps)(OrderForm);






// import {connect} from 'react-redux';
// import OrderForm from './OrderForm';
// import {getOrderOptions} from '../../../redux/orderRedux';


// const mapStateToProps = props =>({            <--- check ?
//   options: getOrderOptions (props),

// });

// export default connect(mapStateToProps)(OrderForm);




