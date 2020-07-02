import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDays() {
    let days;

    const nowCt = new Date();
    const endCt = new Date(Date.UTC(nowCt.getUTCFullYear(), 8, 23));
    const startCt = new Date(Date.UTC(nowCt.getUTCFullYear(), 5, 21));

    if (startCt <= nowCt && nowCt <= endCt) {
      days = '';
    } else if (nowCt < startCt) {
      const dayTo = new Date(Date.UTC(nowCt.getUTCFullYear(), 5, 20));
      if (nowCt.getTime() === dayTo.getTime()) {
        days = '1 day to summer :D !';
      } else {
        days = Math.floor((startCt.getTime() - nowCt.getTime()) / (1000*60*60*24)) + ' days to summer : )';
      }
    } else if (nowCt > endCt) {
      const currentYear = nowCt.getUTCFullYear();
      const nextYear = currentYear + 1;
      const nextSummer = new Date(Date.UTC(nextYear, 5, 21));
      days = Math.floor((nextSummer.getTime() - nowCt.getTime()) / (1000*60*60*24)) + ' days to summer : ]';
    }

    return days ;
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.getCountdownDays()}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
