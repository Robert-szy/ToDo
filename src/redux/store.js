import {combineReducers, createStore} from 'redux';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';
import initialStoreData from '../data/dataStore';

// define initial state and shallow-merge initial data
const initialState = {
  app: initialStoreData.app,
  apps: initialStoreData.apps,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',
};

// define reducers
const reducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore (
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
