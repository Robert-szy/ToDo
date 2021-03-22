import React from 'react';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }
    render() {
        return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} image={this.props.image} />
            <div className={styles.description}>
                {this.props.description}
            </div>
            <div className={styles.columns}>
                
                <Column columnTitle={'Animals'} />
                <Column columnTitle={'Plants'} />
                <Column columnTitle={'Minerals'} />
            </div>
        </section>
        )
    }
}

export default List;