import React,{useState} from 'react'
import { InputFile } from '../excel/InputFile'
import { PageHeader } from '../shared/PageHeader'
import {useSelector} from 'react-redux'
import {useFirestoreConnect,useFirestore} from 'react-redux-firebase'

export const TabInput = ({unShow}) => {
  const [selectName, setSelectName] =useState()
  const firestore = useFirestore()
  useFirestoreConnect([`${selectName}`])
  const data = useSelector(state =>state.helpers.json && state.helpers.json[0])
  
  
const  omSaveClick = ()=>{
  if(data && selectName){
      data.sheetData.map((rec) =>{
        const newRec={
          itemName:rec.itemName,
          sign:rec.sign
        }
      return  firestore.collection(`${selectName}`).doc(`${rec.itemNo}`).set(newRec).then(unShow(false))
      .catch((err) => console.log(err))
      
    })
   
  }
}

  return (
    <div>
     <PageHeader word1="קלט" word2="הגדרות" />
     <div className="row">
       <div className="col-md-3">
       <div className="form-check m-2">
        <input
         className="form-check-input"
         type="radio" name="itemsList"
         id="itemsList"
        value="itemsList"
        checked={selectName ==="itemsList"}
        onChange={(e)=>setSelectName(e.target.name)}
        />
        <label className="form-check-label mr-4" htmlFor="itemsList">
          items List
        </label>
        <div className="form-check">
        <input
         className="form-check-input"
         type="radio"
         name="sogList"
         id="sogList"
         value="sogList"
         checked={selectName ==="sogList"}
        onChange={(e)=>setSelectName(e.target.name)}
         />
        <label className="form-check-label mr-4" htmlFor="sogList">
          sog List
        </label>
        </div>
      </div>
       </div>
       
       <div className="col-md-7">
         <InputFile />
         <button type="button" className="btn btn-primary btn-sm btn-block mt-4"
         onClick={omSaveClick}
         >save</button>
            
       </div>
       
       
     </div>
    </div>
  )
}
