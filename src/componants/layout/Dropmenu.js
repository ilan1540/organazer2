import React from 'react'

export const Dropmenu = ({props}) => {
  
  return (
    <div className="dropdown p-1">
  <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {props.btnName}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {props.prams.map((r)=><a key={r.href} className="dropdown-item" href={r.href}>{r.name}</a>)}
    
  </div>
</div>
  )
}


export const NavLinkDropdown = ({props})=> {
  
  return(
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {props.btnName}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {props.prams.map((r)=><a key={r.href} className="dropdown-item text-right" href={r.href}>{r.name}</a>)}
          
        </div>
      </li>
  )
}

export const NavLink = ({props})=> {
return(
  <ul className="nav">
    {props.map((r)=><li className="nav-item" key={r.href}>
    <a className="nav-link active" href={r.href}>{r.name}</a>
  </li>)} 
</ul>
   
  )
}

