import React,{useEffect,useState} from 'react'
import {DocHeader} from '../DocHeader'
import {useSelector} from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { TableData } from '../TableData'


export const P10_1 = () => {
  const [ddata, setData] = useState([])
 //מספר קבןצה להצגה בדןח
  const group = '11000010'


  const year = useSelector(
    ({ firestore: { data } }) => data.options  && data.options.actualPeriod.year
  )
  const period = useSelector(
    ({ firestore: { data } }) => data.options  && data.options.actualPeriod.period
  )
 
  
  useFirestoreConnect([
    {collection: `${period}`},
    {collection:'grouping'}
  ])
 
 const grouping = useSelector(({ firestore: { data } }) => data.grouping && data.grouping[group])

 console.log(grouping)

  // כותרות דוח
  const list= useSelector(({ firestore: { data } }) => data.options&& data.options.kotarot.list)

  const data = useSelector(({firestore:{ordered}}) => ordered && ordered[period])
 // console.log(data)

 useEffect(() => {
  
  const ttt =  ddata.reduce((sum,row)=>row.currValue + sum,0)
  console.log(ttt)
   
 }, [ddata])

  useEffect(() => {
//console.log(data)
//console.log(grouping)
let temp = []

   grouping && grouping.selected.map((rec)=>{
     const value = data&& data.filter((drec=> drec.id ===rec.id))
  //  console.log(value)
    if(value){
      const newRec = {
        id:rec.id,
       itemName:rec.itemName,
       sign: rec.sign,
       beorNo: value[0].beorNo,
       currValue: value[0].currValue,
       pervValue: value[0].pervValue,
       lastYear:  value[0].lastYear,
      }
      
      temp.push(newRec)
   // console.log(temp)
    setData(temp)
    }
   
     return null
   })
  }, [grouping,data])

  const head =[
    {
      Header: 'אלפי שח',
      accessor: 'itemName', 
    },
    {
      Header: 'ביאור',
      accessor: 'beorNo',
    },
    {
      Header: 'ליום 30 בספטמבר',
      columns:[{
        
        columns:[
          {
            Header: `${year}`,
            accessor: 'currValue',
           
          },
          {
            Header: `${year-1}`,
            accessor: 'pervValue',
          },
        ],
        Header: 'בלתי מבוקר',
      },
      
      ]
    },

    {
      Header: 'ליום 31 בדצמבר',
      columns:[{
        Header: 'מבוקר',
        columns:[
          {
            Header: `${year-1}`,
            accessor: 'lastYear',
          },
        ],
       
      }]
    },
  ]
/*
  const data11=[
    {
      itemName:'נכסים בלתי מוחשיים',
      beorNo: 5,
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
    {
      itemName:'נכסי מיסים נדחים',
      beorMo: '',
      currValue: 3059,
      pervValue: 1630,
      lastYear: 1687
    },
    

  ]
 */
//console.log(ddata)
  return (
    <div className="page-A4">
      <DocHeader />
    <div className="container">
      {list ? (
    <div className="table-overflow">
      <label className="caption">{list[0]}</label>
    <TableData 
    header={head}
    myData={ddata}
    />
        
  
      <p>{list[1]}</p>
    
    

      </div>
     ):null}
    </div>
    
    
   </div>
    

  )
}
