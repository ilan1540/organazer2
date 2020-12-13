import React,{useState,useEffect} from 'react'
import {PageHeader} from '../shared/PageHeader'
import { useFirestore} from 'react-redux-firebase'
import {useSelector} from 'react-redux'

export const KotarotHendel = () => {
  const [koteret,setKoteret] = useState('')
  const [list,setList] = useState([])

  const firestore = useFirestore()
 
  const kotarot = useSelector((state) =>state.firestore.ordered.options && state.firestore.ordered.options[1])

  useEffect(() => {
    if(kotarot){
      setList(kotarot.list)
    }
    
  }, [kotarot])

  

  

  const onSaveToFireStore = ()=>{
    console.log(list)
    firestore.collection('options').doc('kotarot').set({list})/*.then(() => history.push('/')).catch((err) => console.log(err))*/
  }
  return (
    <div className="container">
      <PageHeader word1="ניהול" word2="כותרות" />
      <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">הוסף כותרת</span>
      <input type="text"
       className="form-control" 
       placeholder="כותרת" aria-label="koteret" aria-describedby="basic-addon1"
       name="teor"
       value={koteret}
       onChange={(e)=>setKoteret(e.target.value)}
       />
       <span><button
        type="button"
         className="btn btn-primary mr-1"
         onClick={()=>{
           setList([...list,koteret]);
        setKoteret('')
        }}
         >Add</button></span>
         
        </div>
        <button type="button"
         className="btn btn-primary btn-sm"
         onClick={onSaveToFireStore}
         >save to firebase</button>
         <div>
           {list.length > 0 ?(
             <ul className="list-group">
                 {list.map((k,i)=>
                <li key={i} className="list-group-item">{i}.{k}</li>)}
              </ul>
                ):null}
          </div> 


    </div>
  )
}
