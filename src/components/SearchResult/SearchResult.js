/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import CardFound from '../CardFound/CardFound.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';


class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {title, icon, cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>   
          
          {cards.map(cardData => (
            <CardFound key={cardData.id} {...cardData}/>
          ))}

          
          

        </section>
      </Container>
    );
  }
}

export default SearchResult;