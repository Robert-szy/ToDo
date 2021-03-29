import {connect} from 'react-redux';
import Card from './Card.js';
//import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';


const mapStateToProps = state => ({
  title: state.title,
});

/*
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    listId: props.id,
    title,
  })),
});
*/
//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps)(Card);