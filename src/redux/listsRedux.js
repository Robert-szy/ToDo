import shortid from 'shortid';

// selectors
export const getListsForApp = ({lists}) => lists.filter(list => list.appId == 'app-1');

// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => {
  console.log (payload);
  ({ payload: { ...payload, id: shortid.generate() }, type: ADD_LIST });
};


// reducer
export default function reducer(statePart = [], action = {}) {
  console.log (action);

  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}