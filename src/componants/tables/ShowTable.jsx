import React,{useMemo,useEffect,useState} from 'react'
import {useTable} from 'react-table'
import {useSelector} from 'react-redux'
import {useFirestoreConnect} from 'react-redux-firebase'
//import  './table.css'

export const ShowTable = () => {
  const [myData, setMyData] =useState([
    {
      itemName:'נכסים בלתי מוחשיים',
      beorMo: 5,
      currValue: 1196622,
      pervValue: 1256508,
      lastYear: 1247380
    },
    {
      itemName:'הוצאות רכישה נדחות',
      beorMo: 6,
      currValue: 2022426,
      pervValue: 1983207,
      lastYear: 2021204
    },
    

  ])
  const [header, setHeader] =useState([
    {
      Header: 'אלפי שח',
      accessor: 'itemName', 
    },
    {
      Header: 'ביאור',
      accessor: 'beorMo',
    },
    {
      Header: 'ליום 30 בספטמבר',
      columns:[{
        Header: 'בלתי מבוקר',
        columns:[
          {
            Header: 'year',
            accessor: 'currValue',
          },
          {
            Header: 'year-1',
            accessor: 'pervValue',
          },
        ]
      },
      
      ]
    },

    {
      Header: 'ליום 31 בדצמבר',
      columns:[{
        Header: 'מבוקר',
        columns:[
          {
            Header: 'Last Year',
            accessor: 'lastYear',
          },
        ]
      }]
    },
   
  ])
  const [data1, setdata1] =useState([])

const columns = useMemo(()=> header,[])
const data = useMemo(()=> myData ,[])
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
      <h1>table</h1>
      {data1 ?(
       <table className="table" {...getTableProps()} >
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



 /* 
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
 
*/
