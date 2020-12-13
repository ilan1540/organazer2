import React from 'react'
import './Switch.css';

export const Switch = ({ isOn, handleToggle,onColor }) => {
  return (
    <>
    <div className="input-group mt-3">
    <div className="input-group-prepend">
    <input
      checked={isOn}
      onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
    
      <label
      style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        id="switch-button"
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
    <div className="m-1">
    {isOn ? (<label>ביאורים למשתמש</label>):(<label>כל הבאורים</label>)}
    </div>
    
    </div>
     
      
    
    </>
  )
}
