import React from 'react'
import { useSelector } from 'react-redux';

export const Footer = () => {
  const period= useSelector(state => state.firestore.ordered.options && state.firestore.ordered.options[0].period)
  return (
  <div className="footer" >
      <div className="py-1 mr-2">תקופת עבודה :
  <span className="m-1">{period}</span>
  </div>
    </div>
  )
}
