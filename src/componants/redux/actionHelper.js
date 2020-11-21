//import React from 'react'
import firebase from 'firebase/app'

import {
//  PICK_DATE,
//  SAVE_SECOM,
// SAVE_PRATIM,
//  HAFKADOT,
//  SET_HAFKADA,
 // ADD_HAFKADA,
  // from hear
  SET_EXCEL_FILE,
  SET_IMG_URL,
  ADD_KOTARET,
  DEL_KOTARET,
} from './types';

//set img url to redux
export const setUrlHosting = (path , fileName)=>{
  let storageRef= firebase.storage().ref()
  
   storageRef.child(`${path}/${fileName}`).getDownloadURL().then((url)=>{
     console.log(url)
     return {
      type: SET_IMG_URL,
      payload: url,
    };
   })
  }

// set excel wb to redux
export const setExcelWb = (wb) => {
  return {
    type: SET_EXCEL_FILE,
    payload: wb,
  };
};

// save kotarot to redux
export const addKotarot = (kot) => {
  return {
    type: ADD_KOTARET,
    payload: kot,
  };
};
// clear kotarot from redux
export const delKotarot = (kot) => {
  return {
    type: DEL_KOTARET,
    payload : kot
    
  };
};




/* to delete
// get the datePicker
export const getDate = (date) => {
  return {
    type: PICK_DATE,
    payload: date,
  };
};

// save the secom to redux
export const getSecom = (secom) => {
  return {
    type: SAVE_SECOM,
    payload: secom,
  };
};

// save the pratim to redux
export const getPratim = (pratim) => {
  return {
    type: SAVE_PRATIM,
    payload: pratim,
  };
};

// save table hafkdot from firebase to redux helper
export const putHafkadot = (hafkadot) => {
  return {
    type: HAFKADOT,
    payload: hafkadot,
  };
};

// save table of hafkadot to redux after edit
export const setHafkadot = (res) => {
  return {
    type: SET_HAFKADA,
    payload: res,
  };
};

// save to redux doc off add hafkada
export const add_hafkada = (res) => {
  return {
    type: ADD_HAFKADA,
    payload: res,
  };
};


*/