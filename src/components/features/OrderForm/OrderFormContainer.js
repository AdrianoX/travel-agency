import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';
import {setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),

});

const mapDispatchToProps = dispatch => ({

  setOrderOption: option => dispatch(setOrderOption(option)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);




// import {connect} from 'react-redux';
// import OrderForm from './OrderForm';
// import {getOrderOptions} from '../../../redux/orderRedux';


// const mapStateToProps = props =>({            <--- check ?
//   options: getOrderOptions (props),

// });

// export default connect(mapStateToProps)(OrderForm);




