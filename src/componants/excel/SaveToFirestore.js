import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

export const SaveToFirestore = ({history}) => {
  const objToSave = useSelector((state) => state.helpers.toSave);
  const period =useSelector((state) =>state.firestore.ordered.options && state.firestore.ordered.options[0].period)

  const taskId = useSelector(state => state.helpers.toSave.info && state.helpers.toSave.info.id)
 
 // console.log(history)
  const firestore = useFirestore();

  function onClickSaveAcount() {
    const kelet=  objToSave.data.data.sheetData[0].period
    const keletTaskId = objToSave.data.data.sheetData[0].taskId
    if (period===kelet && parseInt(taskId )=== parseInt(keletTaskId)){
      objToSave.data.data.sheetData.map((rec)=>{      
          const newRec= {
            ...rec,
            taskId:taskId,
            date : new Date()
          }
       return   firestore.collection('data').add(newRec).then(console.log('קובץ נקלט')
          
        ).catch((err) => console.log(err))
      })
       firestore.collection('taskList').doc(taskId).update({info:[{user:objToSave.info.user,
        date: Date(),
        sog: 'קלט',
        period: period
      }]}).then(history.push('/endkelet')).catch((err) => console.log(err))
       }else{
      console.log('תקופה שגויה  או מספר משימה בדוק קובץ קלט')
      }
     
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

/*
const beorNo = objToSave.info.beorNo;
    const id = `${period}-${beorNo}`
    let newRec = {
      beorNo:objToSave.info.beorNo,
      kotarot:objToSave.info.actualHead,
      teor:objToSave.info.teor,
      user:objToSave.info.user,
      data: objToSave.data.data.sheetData,
      tableHead:objToSave.data.tebleHead,
      date : new Date()
    };
    console.log(id)
    firestore.collection('data').doc(`${id}`).set(newRec).then(() => history.push('/')).catch((err) => console.log(err))

    */