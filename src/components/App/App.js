import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';

//import Creator from '../Creator/Creator.js';
//import {listData} from '../../data/dataStore.js';


class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node, 
    lists: PropTypes.array,
  }
    
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        <Search />

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      
        {/*
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
        */}
      </main>
    );
  }
}

export default App;
