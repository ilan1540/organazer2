import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { PageHeader } from '../shared/PageHeader'
import {  useFirestore } from 'react-redux-firebase'
import { SelectUsre } from './SelectUsre'
//import { Kotarot } from './Kotarot';
import {InputFile} from '../excel/InputFile'
import { SheetTabs } from '../shared/SheetTabs'
import { HeaderHendel } from '../tables/HeaderHendel';
import {useSelector} from 'react-redux'

export const AddBeor = ({history}) => {
  const [beorNo ,setBeorNo] =useState('')
  const [tadirot ,setTadirot] =useState('year')
  const [teor ,setTeor] =useState('')
  const [user ,setUser] =useState('')
  
  
  const fireStore = useFirestore()

  const actualHead = useSelector(state => state.helpers.actualHead)

 

  
 
  const onSaveClick = () =>{
    if (beorNo === '' || teor === '') {
      console.log('err');
    } else {
      const newRec = {beorNo,teor,tadirot,user,actualHead}
      fireStore.collection('beorimlist').doc(beorNo).set(newRec).then(() => history.push('/beorimList'))
      .catch((err) => console.log(err))
      
    }
  }

  
  return (
    <div className="container">
    <div className="row"> 
      <div className="col-md-4  m-1">
      <Link to="/beorimList" type="button" className="btn btn-primary">
      <i className="fas fa-arrow-circle-right">חזור</i>
      
      </Link>
      </div>
      <PageHeader word1="הוספת" word2="ביאור"/>
    
    </div>
    <div className="row">
      <div className="col-md-4">
      <form  className="col-md-10 mx-auto ">
      
      <div className="form-group">
    <label className="" htmlFor="beorNo">מספר ביאור</label>
    <input type="text" className="form-control"
    name="beorNo"
    value={beorNo}
    onChange={(e)=>setBeorNo(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label htmlFor="tadirot">תדירות</label>
    <select className="form-control form-control-sm"
    onChange={(e)=>setTadirot(e.target.value)}
    >
      <option value="year">שנתי</option>
      <option value="qwt-3">רבעון ראשון</option>
      <option value="qwt-6">חצי שנתי</option>
      <option value="qwt-6">רבעון שלוש</option>
      <option value="spshel">מיוחד</option>
    </select>
    </div>

      
    

    <div className="form-group mb-2">
    <label htmlFor="teor">תיאור</label>
    <input type="text" className="form-control"
    name="teor"
    value={teor}
    onChange={(e)=>setTeor(e.target.value)}
    />
    </div>
    <div className="form-group mb-2">
    <label htmlFor="user">אחראי ביאור</label>
    <SelectUsre userSelect={(user)=>setUser(user)} />
      
    </div>
    
      </form>  
      </div>
      <div className="col-md-8">
        <div className="form-group">
          <label>שדות ביאור בהתאם לקובץ</label>
          <InputFile />
          <SheetTabs />
        </div>
        <HeaderHendel />
        
      </div>
      <input
            type="submit"
            value="שמור"
            onClick={onSaveClick}
            className="btn btn-primary btn-block"
          />
     
    </div>
    
    </div>
  )
}


/*
<Kotarot
        kotarot={kotarot}
        add={handelAdd}
        del={handelDel} 
        
        />
*/


/*
const handelAdd = (fieldName,fieldTeor) => {
    const addKoteret = {
      fieldName,
      fieldTeor,
      id: Math.floor(Math.random()*100)
    }; 
    setKotarot([...kotarot, addKoteret]);
  };

  const handelDel = (key) => {
    const arr = kotarot;
    if (arr) {
      const res = arr.filter((rec) => rec.id !== key);   
  setKotarot(res);   
    }
  };
*/