import {connect} from 'react-redux';
import CardFound from './CardFound.js';
//import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';


const mapStateToProps = state => ({
  columnId: state.columnId,  
  title: state.cards.title,
  columnTitle: state.columns.title,
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
export default connect(mapStateToProps)(CardFound);