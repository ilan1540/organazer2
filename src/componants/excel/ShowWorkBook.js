import React, { useState, useEffect } from 'react';
import { SaveToFirestore } from './SaveToFirestore';
import { useSelector } from 'react-redux';

export const ShowWorkBook = () => {
  const [sheetData, setSheetData] = useState();
  const [sheetInfo, setSheetInfo] = useState();

  const wb = useSelector((state) => state.helpers.wb);

  useEffect(() => {
    if (wb) {
      const sheetTab = [];
      const sheetHeader = [];
      const info = [];
      wb.map((rec) => {
        sheetTab.push(rec.sheetName);

        const headerName = Object.keys(rec.sheetData[0]);
        sheetHeader.push(headerName);
        const sheetInfo = {
          tabName: rec.sheetName,
          sheetHeader: headerName,
          sheetData: rec.sheetData,
        };
        info.push(sheetInfo);

        return null;
      });

      setSheetInfo(info);
    }
  }, [wb]);

  const onSelectTab = (e) => {
    if (sheetInfo) {
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
            <SaveToFirestore />
          </div>
        </div>
      ) : null}
      <div>
        <table className="table">
          <thead>
            <tr>
              {sheetData &&
                sheetData.sheetHeader.map((r, i) => (
                  <th className="text-right" key={i} scope="col">
                    {r}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sheetData &&
              sheetData.sheetData.map((r, i) => (
                <tr key={i}>
                  {sheetData.sheetHeader.map((c, i) => (
                    <td key={i}>{r[c]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
