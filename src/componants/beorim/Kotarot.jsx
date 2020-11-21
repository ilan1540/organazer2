import React,{useState} from 'react'


export const Kotarot = ({kotarot,add,del}) => {
  const [fieldName, setFieldName] =useState('')
  const [fieldTeor, setFieldTeor] =useState('')
 
  return (
    <div>
    <label>כותרות</label>
    <div className="form-row">
      <div className="col">
        <input type="text" 
        className="form-control"
         placeholder="שם שדה"
         value={fieldName}
         onChange={(e)=>setFieldName(e.target.value)}
        
         />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="תיאור שדה"
        value={fieldTeor}
        onChange={(e)=>setFieldTeor(e.target.value)}
        />
      </div>
      <div className="col">
        <button
        onClick={()=>add(fieldName,fieldTeor)}
        >+</button>
      </div>
    </div>

    <div className="form-row container">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">שם שדה</th>
      <th scope="col">תיאור שדה</th>
      
    </tr>
  </thead>
  <tbody>
    {kotarot&& kotarot.map((r,i)=>
    <tr key={i}>
      <td>{r.fieldName}</td>
      <td>{r.fieldTeor}</td>
      <td><button
      onClick={()=>del(r.id)}
      >-</button></td>
    </tr>
    )}
  </tbody>
  </table>
    </div>
 
  </div>
  )
}
