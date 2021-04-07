import React from 'react';
import styles from './Header.scss';
//import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Search from '../Search/SearchContainer.js';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';


class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name= {settings.header.icon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;