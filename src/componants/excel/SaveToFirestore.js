import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

export const SaveToFirestore = ({history}) => {
  const objToSave = useSelector((state) => state.helpers.toSave);
  const period =useSelector((state) =>state.firestore.ordered.options && state.firestore.ordered.options[0].actualPeriod)
 
 // console.log(objToSave)
  const firestore = useFirestore();

  function onClickSaveAcount() {
    const beorNo = objToSave.info.beorNo;
    const id = `${period}-${beorNo}`
    let newRec = {
      beorNo:objToSave.info.beorNo,
      kotarot:objToSave.info.kotarot,
      teor:objToSave.info.teor,
      user:objToSave.info.user,
      data: objToSave.data.data.sheetData,
      tableHead:objToSave.data.tebleHead,
      date : new Date()
    };
    
    firestore.collection('data').doc(id).set(newRec).then(() => history.push('/')).catch((err) => console.log(err))
  }

  
  return (
    <div>
      {objToSave && objToSave.data && objToSave.info ?(
        <button
        className="btn btn-outline-secondary"
        type="button"
        style={{ cursor: 'pointer' }}
        onClick={onClickSaveAcount}
      >
       שמור קובץ ביאור {objToSave.info.beorNo}
      </button>
      ):null}
      
    </div>
  );
};
