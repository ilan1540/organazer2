import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setExcelWb } from '../redux/actionHelper';
import xlsx from 'xlsx';

export const InputFile = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('Choose File');

  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.files[0].name) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  useEffect(() => {
    if (file) {
      let wb = [];
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = xlsx.read(data, { type: 'binary' });

        workbook.SheetNames.forEach((sheet, i) => {
          let rowObject = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
          wb.push({
            sheetName: workbook.SheetNames[i],
            sheetData: rowObject,
          });
          //  console.log(wb);
          dispatch(setExcelWb(wb));
        });
      };
    }
  }, [file, dispatch]);


  return (
    <form>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            accept=".xlsx,.xls, .csv "
            onChange={onChange}
            
          />
          <label className="custom-file-label text-center" htmlFor="customFile">{fileName}</label>
        </div>
      </form>
  )
}
