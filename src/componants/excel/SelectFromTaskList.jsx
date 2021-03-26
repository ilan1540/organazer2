import React from 'react'
import {useSelector,useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import {setBeorInfo} from '../redux/actionHelper'


export const SelectFromTaskList = ({user,isAllUsers}) => {
  const dispatch = useDispatch()
  const taskList = useSelector((state) => state.firestore.ordered.taskList);

  const userlist = useSelector((state) =>state.firestore.ordered.taskList && state.firestore.ordered.taskList.filter(rec =>rec.user===user ));

   useFirestoreConnect([
    {
      collection: 'taskList',
        orderBy: ['taskId', 'asc'], // asc or desc
     //  where: ['user', '==', user],
    },
  ]);

  const onSelectFromList = (e)=>{
    //console.log(e.target.value)
    const rec = taskList.filter((rec)=>e.target.value === rec.taskId)
    //console.log(rec[0])
    dispatch(setBeorInfo(rec[0]))
      }

      if(isAllUsers){
        return (
          <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">מספר ביאור</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01"
        onChange={onSelectFromList}>
           <option >בחר...</option>   
            {userlist && userlist.map((rec)=>
             <option key={rec.id} value={rec.id} >{rec.id}-{rec.teor}</option>
             )} 
        </select>
      </div>
        )
      }
}
