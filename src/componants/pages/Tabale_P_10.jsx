import React from 'react'
import {useSelector} from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import {numberWithCommas} from '../redux/globalFunc'

export const Tabale_P_10 = ({beorNo,qte}) => {
   useFirestoreConnect([
    {
      collection: 'data',
      doc: `${qte}-${beorNo}`
    }
  ])

  const list= useSelector(state => state.firestore.ordered.options&& state.firestore.ordered.options[1].list)
      console.log(list)
  

  const data = useSelector(
    ({ firestore: { ordered } }) => ordered.data  && ordered.data[0].data
  )

  const year = useSelector(
    ({ firestore: { ordered } }) => ordered.options  && ordered.options[0].year
  )


 
  return (
<div className="container">
  {list ?(
<div className="table-overflow">
<table className="table">
    <caption>{list[0]}</caption>
<thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th colSpan="2">{list[6]}</th>
      <th scope="col">{list[7]}</th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
  <th scope="col">{year}</th>
      <th scope="col">{year-1}</th>
      <th scope="col">{year-1}</th>
    </tr>
    <tr className="under-line">
      <th scope="col">{list[2]}</th>
      <th scope="col">{list[3]}</th>
      <th colSpan="2">{list[4]}</th>
      <th scope="col">{list[5]}</th>
    </tr>
   
   
  </thead>
   
  <tbody>
    {data && data.map(((rec,i)=>
    <tr  key={i}>
    <td>{rec.itemName}</td>
    <td>{rec.beor}</td>
    <td className="pr-5">{numberWithCommas(rec.currentPeriod)}</td>
    <td className="pr-5">{numberWithCommas(rec.parallelPeriod)}</td>
    <td className="pr-5">{numberWithCommas(rec.previousYear)}</td>
  </tr> 
    ))
    }
    </tbody>
  </table>
     <p>{list[1]}</p>  
  </div>
):null}
    </div> 
  )
}
