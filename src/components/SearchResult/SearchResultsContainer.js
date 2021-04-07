import {connect} from 'react-redux';
import SearchResult from './SearchResult.js';
import {getCardsForSearch, createActionAddCard} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchText),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);