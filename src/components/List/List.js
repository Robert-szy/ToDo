import React from 'react';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import styles from './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {
        return (
        <section className={styles.component}>
            <Hero titleText={this.props.title} image={this.props.image} />
            <div className={styles.description}>
                {this.props.children}
            </div>
            <div className={styles.columns}>
                <Column titleText={'Animals'} />
                <Column titleText={'Plants'} />
                <Column titleText={'Minerals'} />
            </div>
        </section>
        )
    }
}

export default List;