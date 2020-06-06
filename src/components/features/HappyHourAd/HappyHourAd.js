import React from 'react';
import styles from './HappyHourAd.scss';
import propTypes from 'prop-types';                     // 1A
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
    static propTypes = {
      title: propTypes.string,                             // 1A
      promoDescription: propTypes.string,
    }

    constructor(){
      super();
      
      /* run this.forceUpdate() every second */
      setInterval(() => this.forceUpdate(), 1000);
    }

    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
      
      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }
      
      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
    }
    
    render() {
      const {title, promoDescription} = this.props;
      const countdownTime = this.getCountdownTime() / 3600;
      let promoTime;
      if (countdownTime > 23) {
        promoTime = promoDescription;
      } else {
        promoTime = formatTime(this.getCountdownTime());
      }
    
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.promoDescription}>{promoTime}</div>
        </div>
      );
    }
}


export default HappyHourAd;