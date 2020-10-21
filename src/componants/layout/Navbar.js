import React from 'react'
import { useFirebase } from 'react-redux-firebase';
import {useSelector} from 'react-redux'
import { NavLinkDropdown,NavLink } from './Dropmenu'
import  {shotef,manage,links} from './LinkType'
export const Navbar = (props) => {
  const firebase = useFirebase();
  const login = useSelector(state =>state.firebase.auth.email)
 
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 justify-content-between" > 
    <ul className="navbar-nav  p-0 ">
      
      {login ? <li className="nav-item">
        <a href="/" className="nav-link"
        onClick={() => firebase.logout().then(() => props.history.push('/exitcard'))
        .catch((err) => console.log('יציאה מהמערכת'))}
        >יציאה</a>
        </li>:<li>
          <a href="/login" className="nav-link">כניסה</a>
        </li> } 
        
      </ul>
      {login ?(
        <div className="navbar-nav">
        <NavLink props={links} />
      <NavLinkDropdown props={shotef} />
      <NavLinkDropdown props={manage} />
      </div>
      ):null}
      
      
     <div className="text-left ml-2" >
       {login ? (<a className="navbar-brand" href="/">{login} </a>):(<a className="navbar-brand" href="/">נא להכנס למערכת</a>)}
     
     </div>
      
    </nav>
  )
}
