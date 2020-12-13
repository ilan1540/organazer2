import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setExcelWb,setExcelJson } from '../redux/actionHelper';
//import xlsx from 'xlsx';
import {ExcelRenderer,excelToJson} from '../excel-reader';

export const InputFile = () => {
  const [fileName, setFileName] = useState('Choose File');

  const dispatch = useDispatch();

  const onGetExcelFilel =(e)=>{
    if (e.target.files[0].name) {
     //  setFile(e.target.files[0]);
       setFileName(e.target.files[0].name);
 let fileObj = e.target.files[0]
       ExcelRenderer(fileObj, (err, resp) => {
         if(err){
           console.log(err);            
         }
         else{
          dispatch(setExcelWb(resp));
       //   console.log(resp);
         } 
       }); 
       excelToJson(fileObj, (err,resp)=>{
        if(err){
          console.log(err);            
        }
        else{
          dispatch(setExcelJson(resp));
      //  console.log(resp);
        } 
       })
  }
  }

 
  return (
    <form>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            accept=".xlsx,.xls, .csv "
            onChange={onGetExcelFilel}
            
          />
          <label className="custom-file-label text-center" htmlFor="customFile">{fileName}</label>
        </div>
       
      </form>
  )
}
