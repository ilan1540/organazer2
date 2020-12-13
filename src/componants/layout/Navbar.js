import React from 'react'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase';
import {useSelector} from 'react-redux'
import { NavLinkDropdown,NavLink } from './Dropmenu'
import  {shotef,manage,links} from './LinkType'
import { Picture } from './Picture';


export const Navbar = (props) => {
  const firebase = useFirebase();
 
  const userId = useSelector((state)=>state.firebase.auth.uid);

  useFirestoreConnect([
    {
      collection: 'users',
      doc: userId
    },
    {
      collection: 'options'/*,
      doc: 'actualPeriod'*/
    }

  ])
  
  var user = useSelector(
    ({ firestore: { data } }) => data.users && data.users[userId]
  )
  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 justify-content-between" > 
    <ul className="navbar-nav  p-0 ">
      
      {user && user.email ? <li className="nav-item">
        <a href="/exitcard" className="nav-link mr-1"
        onClick={() => firebase.logout()}
        >יציאה</a>
        </li>:<li>
          <a href="/login" className="nav-link mr-1">כניסה</a>
        </li> } 
        
      </ul>
      {user && user.email ?(
        <div className="navbar-nav">
        <NavLink props={links} />
      <NavLinkDropdown props={shotef} />
      <NavLinkDropdown props={manage} />
      </div>
      ):null}
      
      { user && user.email  ?(
      <div className="text-left m-2" >
      <Picture url={user.url} size="30" />
     <a className="navbar-brand" href="/">
       {user.email} 
       </a>       
     </div>
     ):(
     <a className="navbar-brand" href="/">נא להכנס למערכת</a>
     )}      
    </nav>
  )
}

