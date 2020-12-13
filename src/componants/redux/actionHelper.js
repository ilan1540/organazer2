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
  SET_BEOR_INFO,
  SET_WB_TO_SAVE,
  SET_EXCEL_JSON,
  SET_COL_HEADER,
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

// set excel wb to redux format excel
export const setExcelWb = (wb) => {
  return {
    type: SET_EXCEL_FILE,
    payload: wb,
  };
};

// set excel wb to redux format json
export const setExcelJson = (wb) => {
  return {
    type: SET_EXCEL_JSON,
    payload: wb,
  };
};
// set col Header to redux
export const setColHeader = (head) => {
  console.log(head)
  return {
    type: SET_COL_HEADER,
    payload: head,
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
  } 
  };
// set beor info to redux to save
export const setBeorInfo = (info) => {
  return {
    type: SET_BEOR_INFO,
    payload : info
  }
  };

  // set activ data to save
export const setDataToSave = (data) => {
  return {
    type: SET_WB_TO_SAVE,
    payload : data
  
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