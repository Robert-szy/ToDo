import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';

import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';


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
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        <Search />

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      
        
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={addList}/>
        </div>
        
      </main>
    );
  }
}

export default Home;
