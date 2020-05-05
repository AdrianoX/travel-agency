/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// CHECK/DONE ? - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// CHECK/DONE ? - add other action creators
export const changeTripDuration = payload => ({ payload, type: CHANGE_DURATION });
export const addTripTag = payload => ({payload, type: ADD_TAG});
export const removeTripTag =  payload => ({payload, type: REMOVE_TAG});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types <-------------- ??? check later
    default:
      return statePart;
  }
}
