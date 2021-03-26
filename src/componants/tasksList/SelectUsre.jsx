import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'


export const SelectUsre = ({userSelect,user}) => {
  const [dName, setDName ] =useState()
  useFirestoreConnect(['users']) 
  const users = useSelector((state) => state.firestore.data.users)

  useEffect(()=>{
    if(users){
      const dName = Object.values(users)
     
      setDName(dName)
    }
  },[users])
  
//  console.log(user)
  
  return (
    <div>
      <div className="input-group mb-3">
  <select
  value={user}
   onChange={(e)=>userSelect(e.target.value)}
  className="custom-select" id="displayName">
    <option value="one">בחר...</option>
    {dName && dName.map((user)=>
    <option key={user.email}
     value={user.displayName}
     >{user.displayName}
    </option>)}  
  </select>
</div>        
 </div>  
  )
}



