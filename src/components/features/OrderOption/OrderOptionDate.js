import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

// import 'react-datepicker/dist/react-datepicker.css';
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
  }

  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
  };

  render() {
    return (
      <DatePicker className={styles.input}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}


export default OrderOptionDate;