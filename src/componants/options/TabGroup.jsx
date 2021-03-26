import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect,useFirestore } from 'react-redux-firebase'
import { PageHeader } from '../shared/PageHeader'

export const TabGroup = ({history}) => {
  const [itemNo, setItemNo] = useState('')
  const [filter, setFilter] =useState([])
  const [selected, setSelected] =useState([])
  const [id, setId] =useState('')
  const [itemName, setItemName] =useState('')
  const [sign, setSign] =useState(1)
  const [groupNo, setGroupNo] =useState('')
  const [groupFilter, setGroupFilter] =useState([])

  const firestore = useFirestore()

  useFirestoreConnect(() => [
    { collection: 'itemsList'},{collection: 'grouping'}])

  const itemsList = useSelector(
    ({ firestore: { ordered } }) => ordered.itemsList 
  )
  const grouping = useSelector(
    ({ firestore: { ordered } }) => ordered.grouping 
  )


  const onChangeGroupFilter = (param)=>{
    if(param!=null){
      setGroupFilter(
        grouping.filter((rec)=>{  
        return  `${rec.id}  ${rec.itemName}`.includes(param)} )
      )
    }
    if(param===""){
      setGroupFilter([])
    //  setdata([])
    }
  }
  

  const onChangeFilter =(param)=>{
    if(param!=null){
      setFilter(
        itemsList.filter((rec)=>{  
        return  `${rec.id}  ${rec.itemName}`.includes(param)} )
      )
    }
    if(param===""){
      setFilter([])
    //  setdata([])
    }
  }
// בדיקה שלא נבחרה רשומה כפולה
  const onSelectRec = (rec) =>{
    const temp = selected.filter((r)=>r.id === rec.id)  
    if(!temp.length>0){
      setSelected([...selected, rec])
    }
}

const onSelectGroup =(rec)=>{
  setId(rec.id)
  setItemName(rec.itemName)
  setSign(rec.sign)
  setSelected(rec.selected)
  
}

const onRemovRec = (rec)=>{
  setSelected(
    selected.filter((r)=>r.id !== rec.id)
  )
}

const onMoveUp = (rec)=>{
 let index = 0
  selected.map((r,i)=>{
    if(r.id === rec.id){
     index = i    
    }
    return null
  })
 // move rec up
 if (index > 0){
   let list = [...selected]
  list.splice(index,0,list.splice(index-1,1)[0])
  setSelected([...list])
 }
 
}
const onMoveDown = (rec)=>{
  let index = 0
  selected.map((r,i)=>{
    if(r.id === rec.id){
     index = i    
    }
    return null
  })
 // move rec down
 if(index+1 !== selected.length){
   let list = [...selected]
  list.splice(index,0,list.splice(index+1,1)[0])
  setSelected([...list])
 }
  return null
}

const onSaveRec =()=>{
  if(id && itemName && sign && selected){
    const newRec ={
      itemName, sign , selected
    }
    return  firestore.collection("grouping").doc(`${id}`).set(newRec).then(history.push('/'))
    .catch((err) => console.log(err))
   
  }
}

    
  

  return (
    <div className="container">
     <PageHeader word1="Group" word2="Items" />
     <div className="row">
       <div className="col-md-4">
        <div className="form-control">
        <input type="text" className="form-control" 
        value={itemNo}
        onChange={(e)=>
        {onChangeFilter(e.target.value)
        setItemNo(e.target.value)}}
        onFocus={()=>setItemNo('')}
        placeholder="search item"/>
        </div>
        <table className="table mt-2" >
          <thead className="thead-x">
            <tr>
            <th scope="col">#</th> 
            <th scope="col">מספר פריט</th>
            <th scope="col">שם פריט</th>
            </tr>
          </thead>
          <tbody>
          {filter && filter.map((rec)=>
            <tr key={rec.id}>
              <td><i className="fas fa-plus btn"
              onClick={()=>onSelectRec(rec)}
              ></i></td>
              <td>{rec.id}</td>
              <td>{rec.itemName}</td>
            </tr>
            )} 
          </tbody>
          </table>  
         </div>

       <div className="col-md-3">
       <div className="form-control">
       <input type="text" className="form-control" 
        value={groupNo}
        onChange={(e)=>
        {onChangeGroupFilter(e.target.value)
        setGroupNo(e.target.value)}}
        onFocus={()=>setGroupNo('')}
        placeholder="search group item"/>
       
         </div>
         <form  className="form-group mt-2">
         <div className="input-group m-2">
            <input type="text"
             name="id"
             value={id}
             placeholder="מספר פריט"
             onChange={(e)=>setId(e.target.value)}
             />
        </div> 
        <div className="input-group m-2">
            <input type="text"
             name="itemName"
             value={itemName}
             placeholder="שם פריט"
             onChange={(e)=>setItemName(e.target.value)}
             />
        </div> 
        <div className="input-group m-2">
            <input type="number"
             name="sign"
             value={sign}
             placeholder="סימן הכפלה"
             onChange={(e)=>setSign(parseInt(e.target.value))}
             />
        </div> 
        <button
         type="button"
          className="btn btn-primary btn-sm btn-block"
          onClick={onSaveRec}
          >שמירה</button>
         </form>
         <table className="table" >
          <thead className="thead-x">
            <tr>
            <th scope="col">#</th> 
            <th scope="col">מספר קבוצה</th>
            <th scope="col">שם קבוצה</th>
            </tr>
          </thead>
          <tbody>
          {groupFilter && groupFilter.map((rec)=>
            <tr key={rec.id}>
              <td><i className="fas fa-check btn"
              onClick={()=>onSelectGroup(rec)}
              ></i></td>
              <td>{rec.id}</td>
              <td>{rec.itemName}</td>
            </tr>
            )} 
          </tbody>
          </table>
         </div>

       <div className="col-md-4">
         <div className="form-control">
           <h6 className="text-center">group to save</h6>
         </div>
         <table className="table mt-2" >
          <thead className="thead-x">
            <tr>
            <th scope="col">del</th>
            <th scope="col">up</th>
            <th scope="col">down</th>
            <th scope="col">מספר פריט</th>
            <th scope="col">שם פריט</th>
            </tr>
          </thead>
          <tbody>
          {selected && selected.map((rec)=>
            <tr key={rec.id}>
              <td><i className="fas fa-minus btn"
              onClick={()=>onRemovRec(rec)}
              ></i></td>
              <td><i className="fas fa-caret-up btn"
              onClick={()=>onMoveUp(rec)}
              ></i></td>
              <td><i className="fas fa-caret-down btn"
              onClick={()=>onMoveDown(rec)}
              ></i></td>
              <td>{rec.id}</td>
              <td>{rec.itemName}</td>
            </tr>
            )}
            
          </tbody>
          </table>  
        </div>
     </div>
    </div>
  )
}
