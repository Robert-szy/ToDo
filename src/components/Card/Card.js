import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
//import {listData} from '../../data/dataStore.js';

class Card extends React.Component {
    //state = {
    //    cards: this.props.columns.cards || [],
    //  }
    static propTypes = {
      title: PropTypes.node,
    //    cards: PropTypes.array,
    }
    
    render() {
      return (
        <section className={styles.component}>
            
          <h3>{this.props.title}</h3>    
            
        </section>
      );
    }
}

export default Card;