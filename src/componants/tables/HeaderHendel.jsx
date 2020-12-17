import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setColHeader,setActualHeader} from '../redux/actionHelper'

export const HeaderHendel = ({kotarot}) => {
  const dispatch = useDispatch()
  const [colHead, setColHead]=useState()
  const [isActualHead ,setIsActualHead] =useState(false)

  const columns =  useSelector(state =>  state.helpers.baseHead)

  const colName =  useSelector(state =>  state.helpers.baseHead)

 useEffect(() => {
  dispatch(setActualHeader(kotarot))
  dispatch(setColHeader(kotarot))
   
 }, [kotarot,dispatch])

 console.log(columns)

  useEffect(()=>{
    let col = []
    if(colName){
      colName.map((row)=>
      col.push({
        Header : row,
        accessor: row
  })
        )
    } 
   //   console.log(col)
     dispatch(setColHeader(col)) 
  },[dispatch,colName])

  useEffect(()=>{
    if(columns){
      setColHead(columns)
    }
  
  },[columns])



  
  const onChangeHendel = (e) => {
    const temp = []
    colHead.map((rec)=>{
      if(rec.accessor===e.target.name){
temp.push({
  accessor:e.target.name,
  Header:e.target.value
})
      }else{
     temp.push({accessor:rec.accessor,
      Header:rec.Header})   
      }
      return null
    })

    setColHead(temp)
   
//  console.log(e.target)
   
  
   };
 
  return (
    <div className="row">
      <div className="col-md-10">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">שם שדה</th>
            <th scope="col">תיאור שדה</th>
            
          </tr>
        </thead>
        <tbody>
          {columns && columns.map((rec,i)=>
          <tr key={i}>
          <td>
          <span className="input-group-text" >{rec.accessor}</span>
            </td>
            
          <td>
          <input type="text" className="form-control"
          name={rec.accessor}
         defaultValue={rec.Header}
          onChange={(e)=>onChangeHendel(e)}
          />
            </td>
        </tr>
          )}
          
        </tbody>
      </table>
      </div>
      <div className="col-md-1">
        {!isActualHead ?(
          <button 
      type="button" 
      className="btn CircleBtn btn-success"
      onClick={()=>{dispatch(setActualHeader(colHead));
                    setIsActualHead(true)
      }}
      >אשר שמות</button>
        ):null}
      
      </div>
      
    </div>
  )
}
