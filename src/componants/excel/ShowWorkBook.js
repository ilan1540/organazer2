import React, { useState, useEffect } from 'react';
import { SaveToFirestore } from './SaveToFirestore';
import { useSelector ,useDispatch } from 'react-redux';
import { setDataToSave} from '../redux/actionHelper'
import {OutTable} from '../excel-reader';

export const ShowWorkBook = ({history}) => {
  const [sheetData, setSheetData] = useState();
  const [sheetInfo, setSheetInfo] = useState();
  const [tableHeader, setTableHeader] =useState()
  const [tabName, setTabName] =useState()
const dispatch = useDispatch()
  const wb = useSelector((state) => state.helpers.wb);
  const json = useSelector((state) => state.helpers.json);
 

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
      setSheetInfo(info);
    }
  }, [wb]);

 
  useEffect(()=>{
    json.map((rec)=>{
         if(rec.sheetName === tabName  ){
           const toSave = {
             data:rec,
             tebleHead: tableHeader,
             tabName:tabName
           }
           dispatch(setDataToSave(toSave))
         }
         return null
       })
  },[json,tabName,tableHeader,dispatch])

  const onSelectTab = (e) => {
  setTabName(e.target.name)
    if(wb){
      wb.map((rec)=>{
        if(rec.sheetName === e.target.name){
          setTableHeader(rec.data.rows[0])
        }
        return null
      })
    }

    if (sheetInfo) {
      sheetInfo.map((rec) =>{
        if(rec.tabName === e.target.name){
          setSheetData(rec)  
        }
      return null
      })

      const sheet = sheetInfo.find((sheet) => {
       return sheet.tabName === e.target.name;
      });
      setSheetData(sheet);
    }

  };


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
          <div>
            <SaveToFirestore history={history} />
          </div>
        </div>
      ) : null}
      <div>
      {sheetData && sheetData.sheetData.cols ?(
          <OutTable data={sheetData.sheetData.rows} columns={sheetData.sheetData.cols}
          tableClassName="ExcelTable2007" tableHeaderRowClass="heading"
          />
        ):null}
        
      </div>
    </div>
  );
};


