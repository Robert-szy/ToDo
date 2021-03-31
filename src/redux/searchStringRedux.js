//import shortid from 'shortid';

// selectors
export const getSearchString = ({app}) => app.searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const SEARCH_STRING = createActionName('SEARCH_STRING');

// action creators
export const createActionSearchString = payload => {
  console.log (payload);
  return ({payload, type: SEARCH_STRING });
};


// reducer
export default function reducer(statePart = '', action = {}) {
  console.log (action);

  switch (action.type) {
    case SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

