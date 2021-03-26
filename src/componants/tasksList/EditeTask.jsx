import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { PageHeader } from '../shared/PageHeader'
import { useSelector} from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { SelectUsre } from './SelectUsre';
//import { EditKotarot } from './EditKotarot';



export const EditeTask = ({match,history}) => { 
  const [eTask ,setEtask] =useState()
  const [eKotarot ,setEkotarot] =useState()
  const [colTeor, setColTeor] = useState()
  const firestore = useFirestore();

  

  useFirestoreConnect([
    {
      collection: 'taskList',
      doc: match.params.id,
    },
  ]);

  var task = useSelector(
    ({ firestore: { ordered } }) => ordered.taskList && ordered.taskList[0]
  );
  
  var actualHead = useSelector(
    ({ firestore: { ordered } }) => ordered.taskList && ordered.taskList[0].actualHead
  );

useEffect(()=>{
   setEtask(task)
   setEkotarot(actualHead)    
},[task,actualHead])



 
  const onSaveClick = () =>{
    const newRec = {
       qwtr :eTask.qwtr,
       teor :eTask.teor,
       taskId:eTask.taskId,
       user:eTask.user,
       actualHead:eTask.actualHead,
      }
      firestore.collection('taskList').doc(eTask.taskId).set(newRec).then(() => history.push('/taskslist'))
      .catch((err) => console.log(err))
      
  //  console.log(newRec)
  }

  const onSelectUser = (user) =>{
       setEtask({...eTask, user})
  }

  const onSelectQwtr = (qwtr) =>{
     setEtask({...eTask, qwtr})
  }

  const onChangeHendel = (e) => {
   setEtask({...eTask, teor: e.target.value})
  };
/*
  const onChangeColTeor = (e) => {
   setColTeor({...colTeor, Header: e.target.value})
   const rec = [{
     Header: e.target.value,
     accessor: e.target.name
   }]
 const res= eKotarot.map( obj => rec.find(o=>o.accessor=== obj.accessor)|| obj)
 setEkotarot(res)
setEbeor({...eBeor,actualHead:res})
 
   };
*/
  const deleteHandel = async () => {
    return await firestore
      .collection('taskList')
      .doc(match.params.id)
      .delete()
      .then(() => history.push('/taskList')
      .catch((err)=>console.log(err))
      );
    }

  
  return (
    <div className="container" >
   <div className="row"> 
   <div className="col-md-4  m-1">
      <Link to="/taskslist" type="button" className="btn btn-primary">
      <i className="fas fa-arrow-circle-right">חזור</i>
      
      </Link>
      </div>
    <PageHeader word1="עריכת" word2="משימה"/>
    </div>
    {task ? (
    <div className="row">
      <div className="col-md-4">
      <form  className="col-md-10 mx-auto ">
      <div className="form-group">
    <label className="" htmlFor="taskId">עבור רבעון<span>{' ' }{task.taskId}</span></label>
    </div>
    <div className="form-group">
    <label htmlFor="qwtr">תדירות</label>
    {eTask ?(
      <select
    value={eTask.qwtr}
    name="qwtr"
    selected={eTask.qwtr}
    onChange={(e)=>onSelectQwtr(e.target.value)}
    className="form-control form-control-sm"
    >
      <option value="Q4">שנתי</option>
      <option value="Q3">רבעון ראשון</option>
      <option value="Q6">חצי שנתי</option>
      <option value="Q9">רבעון שלוש</option>
      <option value="spshel">מיוחד</option>
    </select>
    ):null}
    
    </div>  
    <div className="form-group mb-2">
    <label htmlFor="teor">תיאור</label>
    <input type="text" className="form-control"
    name="teor"
    defaultValue={task.teor}
    onChange={(e)=>onChangeHendel(e)}
    />
    </div>
    <div className="form-group mb-2">
    <label htmlFor="user">אחראי ביאור</label>
    {eTask ? (
      <SelectUsre
    name="user"
    selected={eTask.user}
    userSelect={(user)=>onSelectUser(user)}
    user={eTask.user}
    /> 
    ):null}
    
    </div>
        </form>
      </div>
      {eTask  && task.actualHead ? (
      <div className="col-md-8">
        <h4>עריכת כותרות</h4>
   {colTeor ?(
     <div className="input-group mb-3">
     <span className="input-group-text" id="basic-addon1">{colTeor.accessor}</span>
     <input type="text" className="form-control"  aria-describedby="basic-addon1"
     name={colTeor.accessor}
     value={colTeor.Header}
    /* onChange={(e)=>onChangeColTeor(e)}*/
     />
    
   </div>
   ):null}     
  
<table className="table">
  <thead>
    
    <tr>
      <th scope="col">עריכה</th>
      <th scope="col">שם שדה</th>
      <th scope="col">תיאור שדה</th>
      </tr>
</thead>
<tbody>
  


</tbody>
</table>


      </div>
        ):null}
    </div>
        ):null} 
<input
            type="submit"
            value="שמור"
            onClick={onSaveClick}
            className="btn btn-primary btn-block"
          />
    <button
    type="submit"
    onClick={deleteHandel}  
    className="btn btn-danger btn-block"
    >מחק</button>
    </div> 
  )  
}


/*
{eKotarot && eKotarot.map((rec)=>
  <tr key={rec.accessor}>
      <td >
        <i
         className="far fa-edit"
        onClick={()=>setColTeor(rec)}
      ></i></td>
      <td>{rec.accessor}</td>
      <td>{rec.Header}</td>
      </tr>
)}

*/
