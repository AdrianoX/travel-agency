import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';


const DaysToSummer = ({ days }) => (
  <div className={styles.title}>
    {days > 1 && (
      <span>{days} days to summer !</span>
    )}

    {days == 1 && (
      <span>1 day to summer ! :D</span>
    )}  

    {(days <= 0 && days != 1) && (
      <span>{/*Summer has come ! */}</span>
    )}

  </div>
); 


DaysToSummer.propTypes = {
  days: PropTypes.number,
};

export default DaysToSummer; 