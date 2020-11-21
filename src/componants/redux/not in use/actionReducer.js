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

// Filter values
export const filterValues = (res) => {
  return {
    type: FILTER_VALUE,
    payload: res,
  };
};

// clear filter of values
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

// add to select
export const addToSelect = (rec) => {
  return {
    type: ADD_TO_SELECT,
    payload: rec,
  };
};

// clear select
export const clearSelect = () => {
  return {
    type: CLEAR_SELECT,
  };
};

// save select
export const saveSelect = (rec) => {
  console.log(rec);
  return {
    type: SAVE_SELECT,
    payload: rec,
  };
};

// put grams
export const putGrams = (rec) => {
  return {
    type: PUT_GRAMS,
    payload: rec,
  };
};

// remove from select
export const removeFromSelect = (select, id) => {
  const res = select.filter((item) => item.id !== id);

  return {
    type: REMOVE_FROM_SELECT,
    payload: res,
  };
};

// get serch id

export const getRecID = (id) => {
  return {
    type: GET_REC_ID,
    payload: id,
  };
};

//set date to redux
export const datePiker = (date) => {
  return {
    type: SET_DATE,
    payload: date,
  };
};
