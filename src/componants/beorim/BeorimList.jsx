import React from 'react'
import {Link} from 'react-router-dom'
import { PageHeader } from '../shared/PageHeader'
import {useFirestoreConnect,useFirestore} from 'react-redux-firebase'
import {useSelector} from 'react-redux'


export const BeorimList = () => {
  const firestore = useFirestore()
  useFirestoreConnect(['beorimlist'])
  const beorimlist = useSelector((state) => state.firestore.ordered.beorimlist)
 
  
  const tavhead = [
    '',
    'עריכה',
    'מספר ביאור',
    'אחראי',
    ' תיאור',
    'תדירות',
  ];

  const deleteDoc = async (id)=>{
  return await  firestore.collection('beorimlist').doc(id).delete()
    .then(console.log('del success'))
      .catch((err)=>console.log(err))

  }
    
  return (
    <div>
    <div className="row">
      <div className="col-md-2"></div> 
      <div className="col-md-2  mt-2 mr-3">
      <Link to="beorimList/AddBeor" type="button" className="btn btn-primary">
      <i className="fas fa-plus-circle">Add</i>
      </Link>
      </div>
      <PageHeader word1="רשימת " word2="באורים"/>
    
    </div>
    <div className="row">
      <div className="col-md-2">
      </div>
      <div className="col-md-10">
      <div className="container mx-auto">
      <table className="table table-striped table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            {tavhead.map((field, i) => (
              <th scope="col" key={i}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {beorimlist && beorimlist.map((rec)=> <tr key={rec.id} >
          <td><button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={()=>deleteDoc(rec.id)}
          ><i className="fas fa-trash"></i></button></td>
          <td><Link 
          className="btn btn-primary btn-sm"
          to={`/beorimList/editBeor/${rec.id}`}><i className="far fa-edit"></i></Link></td>
        <td  >{rec.id}</td>
        <td  >{rec.user}</td>
        <td  >{rec.teor}</td>
        <td  >{rec.tadirot}</td>

       </tr>)}
        </tbody>
        </table>
  
      </div>
      
      </div>
    </div>
    </div>
    
  )
}
