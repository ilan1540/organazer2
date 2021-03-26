import React,{useState} from 'react'
import { TabYear } from './TabYear'
import { TabInput } from './TabInput'
import { TabGroup } from './TabGroup'

export const TabOption = () => {
  const [tabYear , setTabYear] = useState(false)
  const [tabInput , setTabInput] = useState(false)
  const [group , setGroup] = useState(false)

  
  return (
    <div>
  <ul className="nav nav-pills  nav-justified mt-2">
  <li className="nav-item">
    <button
     type="button"
     className="btn btn-outline-dark btn-sm"
     name="tabYear"
    onClick={()=>setTabYear(!tabYear)}
    >תקופות</button></li>
  <li className="nav-item">
    <button type="button"
     className="btn btn-outline-dark btn-sm"
     onClick={()=>setTabInput(!tabInput)}
     >
    קלט הגדרות
      </button></li>
  <li className="nav-item">
    <button type="button"
     className="btn btn-outline-dark btn-sm"
     onClick={()=>setGroup(!group)}
     >Gruping
     </button></li>
  <li className="nav-item"> 
    <button type="button" className="btn btn-outline-dark btn-sm">Menu 3</button></li>
</ul>
{tabYear ?(<TabYear unShow={setTabYear}  />):null}
{tabInput ?(<TabInput unShow={setTabInput} />):null}
{group ?(<TabGroup unShow={setGroup}  />):null}

</div>
  )
}
