import React from 'react';
import styles from './HappyHourAd.scss';
import propTypes from 'prop-types';                     // 1A

class HappyHourAd extends React.Component {
    static propTypes = {
      title: propTypes.string,                             // 1A
      promoDescription: propTypes.string,
    }


    render() {
      const {title, promoDescription} = this.props;                            // 1A
      return (
        <div>
          <h3 className={styles.title}>{title}</h3>                                {/*1A*/}
          <div className={styles.promoDescription}>{promoDescription}</div>        {/*1A*/}
        </div>
      );
    }
}


export default HappyHourAd;