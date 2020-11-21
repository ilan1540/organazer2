import {
  FILTER_VALUE,
  CLEAR_FILTER,
  ADD_TO_SELECT,
  CLEAR_SELECT,
  SAVE_SELECT,
  PUT_GRAMS,
  REMOVE_FROM_SELECT,
  GET_REC_ID,
  SET_DATE,
} from './types';

const initialState = {
  select: [],
  filterd: null,
  tosave: [],
  recId: '',
  date: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_VALUE:
      return {
        ...state,
        filterd: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterd: null,
      };
    //אני משנה את הפקודה כדי שיעביר רשומה אחת בלבד ולא לצרף למערך
    case ADD_TO_SELECT:
      return {
        ...state,
        select: action.payload,
        // select: [...state.select, action.payload]
      };

    case CLEAR_SELECT:
      return {
        ...state,
        tosave: [],
        select: [],
      };
    case SAVE_SELECT:
      console.log(action.payload);
      return {
        ...state,
        tosave: action.payload,
      };
    case PUT_GRAMS:
      return {
        ...state,
        tosave: [...state.tosave, action.payload],
      };
    case REMOVE_FROM_SELECT:
      return { ...state, tosave: action.payload };

    case GET_REC_ID:
      return { ...state, recId: action.payload };

    case SET_DATE:
      return { ...state, date: action.payload };

    default:
      return state;
  }
};
