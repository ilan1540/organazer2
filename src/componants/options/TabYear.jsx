import React,{useState,useEffect} from 'react'
import {  useFirestore } from 'react-redux-firebase';
import { PageHeader } from '../shared/PageHeader'
import { PeriodsList } from './PeriodsList';

export const TabYear = () => {
  const [year,setYear] =useState('yyyy')
  const [month,setMonth] =useState('Q1')
  const [period,setPeriod] =useState('')
  
  const fireStore = useFirestore()


  useEffect(()=>{
    setPeriod(`${month}-${year}`)
  },[year,month])


 
  const onSaveClick= (e)=>{
 
  if (year === 'yyyy' || month === '') {
    console.log('err');
  } else {
    const newPeriod = {period,year,month}
    fireStore.collection('periods').add(newPeriod)
    .then(() =>{
      setYear('yyyy')
      setMonth('Q1')
    } ).then(()=>console.log('record add success'))
    .catch((err) => console.log(err))
  }

 
console.log(period)
  }
  return (
    <div className="mt-1 ">
        <PageHeader word1="ניהול" word2="תקופות" />
        <div className="row">
        
        <div className="col-md-3 mx-auto">
          <PeriodsList  />
      </div>
      <div className="col-md-6 mx-auto ">
     
    <form>
    <div className="form-group row">
    <label htmlFor="staticPeriod" className="col-sm-2 col-form-label">תקופה</label>
    <div className="col-sm-5">
      <input type="text" readOnly 
      className="form-control-plaintext" id="staticPeriod" value={period}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="year" className="col-sm-2 col-form-label">שנה</label>
    <div className="col-sm-4">
      <input
      className="form-control" 
      id="year"
      type="text"
      placeholder="yyyy"
      value={year}
      onChange={(e)=>setYear(e.target.value)}
      />
    </div>
    <label htmlFor="month" className="col-sm-2 col-form-label">רבעון</label>
    <div className="col-sm-4">
    <select 
    className="custom-select"
     id="month"
     selected={month}
     value={month}
      onChange={(e)=>setMonth(e.target.value)}
     >
    <option value="Q1">רבעון א</option>
    <option value="Q2">רבעון ב</option>
    <option value="Q3">רבעון ג</option>
    <option value="Q4">שנתי</option>
  </select>
     
    </div>
  </div>
  <button
       type="button"
       onClick={onSaveClick}
            className="btn btn-primary btn-block"
          >שמור תקופה חדשה</button>

</form>

        
        
</div>
</div>
    </div>
  )
}
