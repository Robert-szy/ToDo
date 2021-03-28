import {connect} from 'react-redux';
import App from './App.js';

const mapStateToProps = state => ({
  title: state.title,
  subtitle: state.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(App);