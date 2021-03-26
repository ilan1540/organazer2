import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'

export const Footer = () => {
 
  const period= useSelector(state => state.firestore.ordered.options && state.firestore.ordered.options[0].period)
  
  return (
  <div className="footer" >
     <div className="row">
    <div className="col-6 col-md-4">
      <div className="py-1 mr-2">תקופת עבודה :
      <span className="m-1">{period}</span>
    </div>
      </div>
    <div className="col-6 col-md-4">
    <div className="pagination mt-1 ml-2 justify-content-center">
      put hear massage
      </div>
   </div>
    <div className="col-6 col-md-4">
      <div className="pagination mt-1 ml-2 justify-content-end">
      <span>{moment().format("MMM DD YYYY")}</span>
      </div>
    
      </div>
  </div>
    </div>
  )
}
