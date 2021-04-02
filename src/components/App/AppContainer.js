import {connect} from 'react-redux';
import App from './App.js';
import {getListsForApp, createActionAddList} from '../../redux/listsRedux.js';

const mapStateToProps = (state, props) => ({
  //title: state.title,
  //subtitle: state.subtitle,
  id: props.id,

  lists: getListsForApp(state, props.id),
});



const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    appId: 'app-1',
    title,
  })),
});

//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
export default connect(mapStateToProps, mapDispatchToProps)(App);



//export default connect(mapStateToProps)(App);