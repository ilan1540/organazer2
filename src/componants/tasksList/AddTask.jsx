import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { PageHeader } from '../shared/PageHeader'
import {  useFirestore } from 'react-redux-firebase'
import { SelectUsre } from './SelectUsre'
import {InputFile} from '../excel/InputFile'
import { SheetTabs } from '../shared/SheetTabs'
//import {useSelector} from 'react-redux'

export const AddTask = ({history}) => {
  const [taskId ,setTaskId] =useState('')
  const [teor ,setTeor] =useState('')
  const [user ,setUser] =useState('')
  const [qwtr,setQwtr] = useState('Q4')
  
  const fireStore = useFirestore()
// to add to save rec if you save header input file
//  const actualHead = useSelector(state => state.helpers.actualHead)

  const onSaveClick = () =>{
    if (taskId === '' || teor === '') {
      console.log('err');
    } else {
      const newRec = {taskId,teor,user,qwtr}
      fireStore.collection('taskList').doc(taskId).set(newRec).then(() => history.push('/tasksList'))
      .catch((err) => console.log(err))
      
    }
  }


  
  return (
    <div className="container">
    <div className="row"> 
      <div className="col-md-4  m-1">
      <Link to="/taskslist" type="button" className="btn btn-primary">
      <i className="fas fa-arrow-circle-right">חזור</i>
      
      </Link>
      </div>
      <PageHeader word1="הוספת" word2="משימה"/>
    
    </div>
    <div className="row">
      <div className="col-md-4">
      <form  className="col-md-10 mx-auto ">
      
      <div className="form-group">
    <label className="" htmlFor="taskId">מספר משימה</label>
    <input type="text" className="form-control"
    name="taskId"
    value={taskId}
    onChange={(e)=>setTaskId(e.target.value)}
    /> 
    </div>
    <div className="form-group mb-2">
    <label htmlFor="teor">תיאור</label>
    <input type="text" className="form-control"
    name="teor"
    value={teor}
    onChange={(e)=>setTeor(e.target.value)}
    />
    </div>
    <div className="form-group mb-2">
    <label htmlFor="user">אחראי ביאור</label>
    <SelectUsre userSelect={(user)=>setUser(user)} />
    </div>
    <div className="form-group mb-2">
    <label htmlFor="user">עבור רבעון</label>
    <select className="form-control form-control-sm"
    onChange={(e)=>setQwtr(e.target.value)}
    >
      <option value="Q4">שנתי</option>
      <option value="Q3">רבעון ראשון</option>
      <option value="Q6">חצי שנתי</option>
      <option value="Q9">רבעון שלוש</option>
      <option value="spshel">מיוחד</option>
    </select>
    </div>
    
      </form>  
      </div>
      <div className="col-md-8">
        <div className="form-group">
          <label>שדות ביאור בהתאם לקובץ</label>
          <InputFile />
          <SheetTabs />
        </div>
        
      </div>
      <input
            type="submit"
            value="שמור"
            onClick={onSaveClick}
            className="btn btn-primary btn-block"
          />
        </div>
    
    </div>
  )
}
