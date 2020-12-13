import {
//  PICK_DATE,
//  SAVE_SECOM,
//  SAVE_PRATIM,
//  HAFKADOT,
 // ADD_HAFKADA,
  // from hear
  SET_EXCEL_FILE,
  SET_EXCEL_JSON,
  SET_IMG_URL,
  ADD_KOTARET,
  DEL_KOTARET,
  SET_WB_TO_SAVE,
  SET_BEOR_INFO,
  SRT_COL_HEADER,
  SET_COL_HEADER
} from './types';

const initialState = {
 // date: '',
//  secom: '',
 // pratim: '',
  kot: [],
  wb: [],
  json:[],
  imgUrl: '',
  toSave:{},
  colHeader: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG_URL:
      return {
        ...state,
        wb: action.payload,
      };
    case SET_EXCEL_FILE:
      return {
        ...state,
        wb: action.payload,
      };
      case SET_EXCEL_JSON:
      return {
        ...state,
        json: action.payload,
      };
      case SET_COL_HEADER:
        return {
          ...state,
          colHeader:   action.payload
        };

      case ADD_KOTARET:
        return {
          ...state,
          kot: [...state.kot,  action.payload]
        };

     case   DEL_KOTARET:
       return {
          ...state,
            kot: action.payload
       }
       case   SET_BEOR_INFO:
       return {
        ...state,
         toSave: {...state.toSave ,info:  action.payload  }
       }
       case   SET_WB_TO_SAVE:
       return {
          ...state,
          toSave: {...state.toSave ,data: action.payload}
       }
    default:
      return state;
  }
};



/* to delete
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
      
      return {
        ...state,
        hafkadot: [
          ...state.firestore.ordered.kopot[0].hafkadot,
          action.payload,
        ],
      };

      return {
        ...state,
        hafkadot: [...state.hafkadot, action.payload],
      };
      */