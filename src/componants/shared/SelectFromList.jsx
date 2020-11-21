import React,{useState,useEffect} from 'react'
import {useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

export const SelectFromList = () => {
  const [searchName, setSearchName] = useState();
  const [filterRec, setFilterRec] = useState();
 
  useFirestoreConnect([
    {
      collection: 'beorimlist',
        orderBy: ['beorNo', 'asc'], // asc or desc
      // where: ['codeMaslol', '==', '508'],
    },
  ]);

  const beorimlist = useSelector((state) => state.firestore.ordered.beorimlist);
  
  useEffect(() => {
    if (searchName === '') {
      setFilterRec('');
    }
  }, [searchName]);

  const onChangeSearch = (e) => {
    setSearchName(e.target.value);
    setFilterRec(
      beorimlist.filter((rec) => {
        return rec.id.includes(searchName);
      })
    );
  };


  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="מספר ביאור"
        onChange={onChangeSearch}
      />
      <div className="ul list-group">
       
        {filterRec && filterRec.map((rec,i)=>
         <li className="list-group-item ">
      <button key={i}
      type="button"
       className="btn btn-primary btn-sm"
       onClick={()=> 
        {
          setFilterRec('')
          setSearchName('')
      }}
       >{rec.id}-{rec.teor}</button>
</li>
      )}   
      </div>         
    </div>
  )
}
