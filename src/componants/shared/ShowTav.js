import React from 'react';

export const ShowTav = ({ data,tavfield,tavhead }) => {
  console.log(data)
  /*
  const tavfield = [
    'date',
    'valueDate',
    'asmacta',
    'debit',
    'ceadit',
    'yitra',
    'teor',
  ];

  const tavhead = [
    'תאריך',
    'תאריך ערך',
    'אסמכתא',
    'חובה',
    'זכות',
    'יתרה',
    'פרטים',
  ];
*/
  return (
    <div>
      <table className="table table-striped table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            {tavhead.map((field, i) => (
              <th scope="col" key={i}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((r, i) => (
              <tr scope="row" key={i}>
                {tavfield.map((c, i) => (
                  <td  key={i}>{r[c]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
