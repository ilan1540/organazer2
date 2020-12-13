export function numberWithCommas(x) {
  x= Number(x)
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function formtDate(d) {
  const sdate = new Date(d);
  const year = sdate.getFullYear();
  var month = sdate.getMonth() + 1;
  const day = sdate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  const tarik = `${day}/${month}/${year}`;
  // console.log(tarik);
  return tarik;
}

export function textToDateFormat(d) {
  var time = '02:00:00';
  var date = d.split(/\//);
  var newDate = date[1] + '/' + date[0] + '/' + date[2] + ' ' + time;
  return newDate;
}

export const isNotNull = (x)=>{
  if(x === null){
    return ''
  }else{
    return (x)
  }
}
