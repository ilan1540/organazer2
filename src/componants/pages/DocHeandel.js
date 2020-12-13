import React from 'react'
//import {Link} from 'react-router-dom'
import {PageHeader} from '../shared/PageHeader'
import { P_10_100 } from './P_10_100'

export const DocHeandel = () => {
  return (
    <div className="container">
      <PageHeader word1="ניהול" word2="דוחות"/>
      
      <div className="container">
      <div className="row">
    <div className="col-md-1">
      <p>10-167</p>
    </div>
    <div className="col-md-11">
     <P_10_100/>
    </div>
    
  </div>
</div>
    </div>
  )
}
