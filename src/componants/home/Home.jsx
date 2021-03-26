import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase';
import {useSelector} from 'react-redux'

export const Home = () => {
  useFirestoreConnect(['data'])
  const data = useSelector((state) => state.firestore.data.data)
 
  return (
    <div>
      home
    </div>
  )
}
