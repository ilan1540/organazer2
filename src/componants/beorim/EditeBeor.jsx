import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { PageHeader } from '../shared/PageHeader'
import { useSelector} from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { SelectUsre } from './SelectUsre';
//import { EditKotarot } from './EditKotarot';



export const EditeBeor = ({match,history}) => { 
  const [eBeor ,setEbeor] =useState()
  const [eKotarot ,setEkotarot] =useState()
  const [colTeor, setColTeor] = useState()
  const firestore = useFirestore();

  

  useFirestoreConnect([
    {
      collection: 'beorimlist',
      doc: match.params.id,
    },
  ]);

  var beor = useSelector(
    ({ firestore: { ordered } }) => ordered.beorimlist && ordered.beorimlist[0]
  );
  var actualHead = useSelector(
    ({ firestore: { ordered } }) => ordered.beorimlist && ordered.beorimlist[0].actualHead
  );

useEffect(()=>{
   setEbeor(beor)
   setEkotarot(actualHead)    
},[beor,actualHead])



 
  const onSaveClick = () =>{
    const newRec = {
       beorNo :eBeor.beorNo,
       teor :eBeor.teor,
       tadirot:eBeor.tadirot,
       user:eBeor.user,
       actualHead:eBeor.actualHead,
      }
      firestore.collection('beorimlist').doc(eBeor.beorNo).set(newRec).then(() => history.push('/beorimList'))
      .catch((err) => console.log(err))
      
    console.log(newRec)
  }

  const onSelectUser = (user) =>{
       setEbeor({...eBeor, user})
  }

  const onSelectTadirot = (tadirot) =>{
     setEbeor({...eBeor, tadirot})
  }

  const onChangeHendel = (e) => {
   setEbeor({...eBeor, teor: e.target.value})
  };

  const onChangeColTeor = (e) => {
   setColTeor({...colTeor, Header: e.target.value})
   const rec = [{
     Header: e.target.value,
     accessor: e.target.name
   }]
 const res= eKotarot.map( obj => rec.find(o=>o.accessor=== obj.accessor)|| obj)
 setEkotarot(res)
setEbeor({...eBeor,actualHead:res})
 
   };

  const deleteHandel = async () => {
    return await firestore
      .collection('beorimlist')
      .doc(match.params.id)
      .delete()
      .then(() => history.push('/beorimList')
      .catch((err)=>console.log(err))
      );
    }

  
  return (
    <div className="container" >
   <div className="row"> 
   <div className="col-md-4  m-1">
      <Link to="/beorimList" type="button" className="btn btn-primary">
      <i className="fas fa-arrow-circle-right">חזור</i>
      
      </Link>
      </div>
    <PageHeader word1="עריכת" word2="ביאור"/>
    </div>
    {beor ? (
    <div className="row">
      <div className="col-md-4">
      <form  className="col-md-10 mx-auto ">
      <div className="form-group">
    <label className="" htmlFor="beorNo">מספר ביאור<span>{' ' }{beor.beorNo}</span></label>
    </div>
    <div className="form-group">
    <label htmlFor="tadirot">תדירות</label>
    {eBeor ?(
      <select
    value={eBeor.tadirot}
    name="tadirot"
    selected={eBeor.tadirot}
    onChange={(e)=>onSelectTadirot(e.target.value)}
    className="form-control form-control-sm"
    >
      <option value="year">שנתי</option>
      <option value="qwt-3">רבעון ראשון</option>
      <option value="qwt-6">חצי שנתי</option>
      <option value="qwt-6">רבעון שלוש</option>
      <option value="spshel">מיוחד</option>
    </select>
    ):null}
    
    </div>  
    <div className="form-group mb-2">
    <label htmlFor="teor">תיאור</label>
    <input type="text" className="form-control"
    name="teor"
    defaultValue={beor.teor}
    onChange={(e)=>onChangeHendel(e)}
    />
    </div>
    <div className="form-group mb-2">
    <label htmlFor="user">אחראי ביאור</label>
    {eBeor ? (
      <SelectUsre
    name="user"
    selected={eBeor.user}
    userSelect={(user)=>onSelectUser(user)}
    user={eBeor.user}
    /> 
    ):null}
    
    </div>
        </form>
      </div>
      {eBeor && beor.actualHead ? (
      <div className="col-md-8">
        <h4>עריכת כותרות</h4>
   {colTeor ?(
     <div className="input-group mb-3">
     <span className="input-group-text" id="basic-addon1">{colTeor.accessor}</span>
     <input type="text" className="form-control"  aria-describedby="basic-addon1"
     name={colTeor.accessor}
     value={colTeor.Header}
     onChange={(e)=>onChangeColTeor(e)}
     />
    
   </div>
   ):null}     
  
<table className="table">
  <thead>
    
    <tr>
      <th scope="col">עריכה</th>
      <th scope="col">שם שדה</th>
      <th scope="col">תיאור שדה</th>
      </tr>
</thead>
<tbody>
{eKotarot && eKotarot.map((rec)=>
  <tr key={rec.accessor}>
      <td >
        <i
         className="far fa-edit"
        onClick={()=>setColTeor(rec)}
      ></i></td>
      <td>{rec.accessor}</td>
      <td>{rec.Header}</td>
      </tr>
)}

</tbody>
</table>


      </div>
        ):null}
    </div>
        ):null} 
<input
            type="submit"
            value="שמור"
            onClick={onSaveClick}
            className="btn btn-primary btn-block"
          />
    <button
    type="submit"
    onClick={deleteHandel}  
    className="btn btn-danger btn-block"
    >מחק</button>
    </div> 
  )  
}



