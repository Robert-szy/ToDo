import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import Creator from '../Creator/Creator.js';
import {pageContents, listData, settings} from '../../data/dataStore.js';


class App extends React.Component {
    
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        
        <List {...listData} />
       
        
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
