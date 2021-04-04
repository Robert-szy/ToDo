import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
import Hero from '../Hero/Hero.js';
import Container from '../Container/Container.js';

import Creator from '../Creator/Creator.js';
import {settings, listData} from '../../data/dataStore.js';


class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node, 
    //apps: PropTypes.array,
    lists: PropTypes.array,
    addList: PropTypes.func,
    //appId: PropTypes.node,
  }
    
  render() {
    const {lists, addList} = this.props;
    return (
      <main className={styles.component}><Container>
        {/*<h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>*/}
        <Hero titleText = {listData.title} image={listData.image} />
        <div className={styles.description}>
          {listData.description}
        </div>

        <Search />

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      
        
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={addList}/>
        </div>
      </Container>  
      </main>
    );
  }
}

export default Home;
