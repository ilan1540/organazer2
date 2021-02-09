import React,{useMemo,useEffect,useState} from 'react'
import {useTable} from 'react-table'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
//import  './table.css'

export const ShowTable = () => {
  const [myData, setMyData] =useState([])
  const [header, setHeader] =useState([])
  useFirestoreConnect([
    {
      collection: 'data',
      doc: 'undefined-10-112'
    }
  ])

  const data1 = useSelector(
    ({ firestore: { ordered } }) => ordered.data  && ordered.data[0].data
  )
  const head = useSelector(
    ({ firestore: { ordered } }) => ordered.data  && ordered.data[0].tableHead
  )
 
useEffect(()=>{
  const col= []
  if(head){
    head.map((rec)=> col.push({
        Header : rec,
        accessor: rec
      })
    )
    setHeader(col)
  }
},[head])

 
 useEffect(()=>{
  const temp = []
   if(data1){
    data1.map((rec)=>JSON.stringify(temp.push((rec))))
    setMyData(temp)
   }
 
 },[data1])
 

const columns = useMemo(()=> header,[header])
const data = useMemo(()=> myData ,[myData])


const tableInstance =  useTable({columns,data})

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = tableInstance

  
  
  return (
    <div className="container mt-5">
      {data1 ?(
       <table {...getTableProps()} >
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     ):null}
    </div>
  )
}
