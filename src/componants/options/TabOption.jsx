import React,{useState} from 'react'
import { TabYear } from './TabYear'

export const TabOption = () => {
  const [tabYear , setTabYear] = useState(false)

  
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
    <button type="button" className="btn btn-outline-dark btn-sm">
    menu2
      </button></li>
  <li className="nav-item">
    <button type="button" className="btn btn-outline-dark btn-sm">Menu 2</button></li>
  <li className="nav-item"> 
    <button type="button" className="btn btn-outline-dark btn-sm">Menu 3</button></li>
</ul>
{tabYear ?(<TabYear  />):null}

</div>
  )
}
