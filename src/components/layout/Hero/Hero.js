import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';


const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <div className={styles.happyHour}>
      <DaysToSummer /> {/*days={days} range={range}*/}
    </div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHourAd title={'Happy Hour :D'}/>
    </div>
  </div>
);

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
};

export default Hero;

// import Moment from 'moment';
// import { extendMoment } from 'moment-range';

// const moment = extendMoment(Moment);



// const now = moment.utc();
// const summer = moment.utc('2020-06-21');
// const days = summer.diff(now, 'days');  // <--- check later

// console.log('Days to summer:', days);

// const start = moment('2020-06-21', 'YYYY-MM-DD');
// const end   = moment('2020-09-23', 'YYYY-MM-DD');
// const range = moment.range(start, end);

// console.log('Range summer', range);
