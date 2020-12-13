import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {setColHeader} from '../redux/actionHelper'

export const HeaderHendel = () => {
  const dispatch = useDispatch()
  //const [columns, setColumns]=useState([])

  const columns =  useSelector(state => state.colHeader)

  console.log(columns)

  const colName = ["itemNo","itemName","beor","currentPeriod","parallelPeriod","previousYear"]

  useEffect(()=>{
    let col = []
   // if(colName){
      colName.map((row)=>
    col.push({
      Header : row,
      accessor: row
})
      )
      console.log(col)
     // setColumns(col)
     dispatch(setColHeader(col)) 
  //  }
    
   // 
  },[])
  
  const onChangeHendel = (e) => {
   // setColumns([...columns[e.target.name], [Header : e.target.value]])
   const temp =columns
   const newValue ={
     Header: e.target.value,
     accessor: columns[e.target.name].accessor
   }
   temp[e.target.name] = newValue
   console.log(columns[e.target.name])
  // setColumns(temp)
   };
 
  return (
    <div>
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
          name={i}
          
          value={rec.accessor}
          onChange={onChangeHendel}
          />
            </td>
        </tr>
          )}
          
        </tbody>
      </table>
    </div>
  )
}
