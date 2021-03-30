import {connect} from 'react-redux';
import Column from './Column.js';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id, state.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps, mapDispatchToProps)(Column);