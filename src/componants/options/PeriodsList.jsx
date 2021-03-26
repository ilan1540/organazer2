import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';


export const PeriodsList = ({history}) => {
  const [actualPeriod,setActualPeriod] =useState('')
  const fireStore = useFirestore()
useFirestoreConnect('periods')


const periods = useSelector(state => state.firestore.ordered.periods)

const period= useSelector(state =>state.firestore.ordered.options && state.firestore.ordered.options[0].actualPeriod)


const onSaveClick =()=>{
  if (actualPeriod === '' ) {
    console.log('err');
  } else {
  const rec= periods.find((r)=> r.period === actualPeriod)
    fireStore.collection('options').doc('actualPeriod').set(rec)
    .then(() =>{
    } ).then(history.push('/'))
   .catch((err) => console.log(err)) 
}}

  return (
    <div>
      <div className="form-group">
    <label htmlFor="staticPeriod" className="form-label">
      תקופת עבודה
  <span className="m-1">{period}</span>
      </label>
    </div>
    <select 
    className="custom-select"
     id="staticPeriod"
    // selected={month}
    // value={month}
      onChange={(e)=>setActualPeriod(e.target.value)}
     >
{periods && periods.map((rec)=><option key={rec.id}value={rec.period}>{rec.period}</option>)
  
}

     </select>
     <button
       type="button"
       onClick={onSaveClick}
            className="btn btn-primary btn-block mt-4"
          >קבע תקופת עבודה</button>
    </div>
  )
}
