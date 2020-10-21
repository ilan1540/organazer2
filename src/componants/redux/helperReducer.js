import {
  PICK_DATE,
  SAVE_SECOM,
  SAVE_PRATIM,
  HAFKADOT,
  ADD_HAFKADA,
  SET_EXCEL_FILE,
} from './types';

const initialState = {
  date: '',
  secom: '',
  pratim: '',
  hafkadot: [],
  wb: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXCEL_FILE:
      return {
        ...state,
        wb: action.payload,
      };
    case PICK_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SAVE_SECOM:
      return {
        ...state,
        secom: action.payload,
      };
    case SAVE_PRATIM:
      return {
        ...state,
        pratim: action.payload,
      };
    case HAFKADOT:
      return {
        ...state,
        hafkadot: action.payload,
      };
    case ADD_HAFKADA:
      console.log(state.firestore.ordered.kopot[0].hafkadot);
      /*
      return {
        ...state,
        hafkadot: [
          ...state.firestore.ordered.kopot[0].hafkadot,
          action.payload,
        ],
      };
*/
      return {
        ...state,
        hafkadot: [...state.hafkadot, action.payload],
      };
    default:
      return state;
  }
};
