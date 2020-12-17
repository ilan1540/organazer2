import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import {setColHeader} from '../redux/actionHelper'

export const SheetTabs = () => {
  const [tableHeader, setTableHeader] =useState()
 // const [tabName, setTabName] =useState()
 // const [sheetInfo, setSheetInfo] = useState();
const dispatch = useDispatch()
  const wb = useSelector((state) => state.helpers.wb);

  useEffect(() => {
    if (wb) {
      const sheetTab = [];
      const info = [];
      wb.map((rec) => {
        sheetTab.push(rec.sheetName);
        const sheetInfo = {
          tabName: rec.sheetName,
          sheetData: rec.data,
        };
        info.push(sheetInfo);

        return null;
      });
    //  setSheetInfo(info);
    }
  }, [wb]);

  useEffect(() => {
    if (tableHeader) {
      dispatch(setColHeader(tableHeader))
    }
  }, [tableHeader,dispatch]);

  const onSelectTab = (e) => {
   // setTabName(e.target.name)
      if(wb){
        wb.map((rec)=>{
          if(rec.sheetName === e.target.name){
            if(rec.data.rows[0] && rec.data.rows[0].length >0){
              let col = []
              rec.data.rows[0].map((row)=>
              col.push({
                Header : row,
                accessor: row
          })
              )
              setTableHeader(col)
            }
           
            
          }
       //   console.log(tableHeader)
          
          return null
        })
      }
    }

  return (
    <div>
      {wb ? (
        <div className="nav" >
          {wb.map((rec) => (
            <div
              className="m-1" role="toolbar" aria-label="Toolbar with button groups"
              key={rec.sheetName}
            >
              <button
              type="button"
                className="btn btn-sm btn-outline-primary"
                name={rec.sheetName}
                onClick={onSelectTab}
              >
                {rec.sheetName}
              </button>
            </div>
          ))}
          
        </div>
      ) : null}
    </div>
  )
}
