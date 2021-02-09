import React from 'react'
import {useSelector} from 'react-redux'
import {DocHeader} from './DocHeader'
import { Tabale_p_10 } from './Tabale_p_10'

export const P_10_100  = () => {
  const period = useSelector(
    ({ firestore: { ordered } }) => ordered.options  && ordered.options[0].period
  )

  return (
    <div className="page-A4">
      <DocHeader />
      {period ?(
        <Tabale_p_10
      qte={period}
      beorNo= '11-167'
      />
      ):null}
      
    </div>

  )
}
