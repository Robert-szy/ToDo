/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>   
        
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
        

      </section>
    );
  }
}

export default Column;