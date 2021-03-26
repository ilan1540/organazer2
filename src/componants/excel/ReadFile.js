import React,{useState} from 'react'
import{PageHeader} from '../shared/PageHeader'
//import { SelectFromList } from '../shared/SelectFromList'
import{SelectFromTaskList} from './SelectFromTaskList'
import { InputFile } from './InputFile'
import {ShowWorkBook} from './ShowWorkBook'
import {useSelector } from 'react-redux';
import { Switch } from '../switch/Switch'

export const ReadFile = ({history}) => {
  const [btnValue, setBtnValue] = useState(true);
  const userName = useSelector((state) =>state.firestore.ordered.users && state.firestore.ordered.users[0].displayName);

  

 


  return (
    <div className="container mt-2">
      <PageHeader word1="Read" word2="Excel File" />
         <InputFile />
         <Switch 
         isOn={btnValue}
         onColor='#06D6A0'
         handleToggle={() => setBtnValue(!btnValue)}
         />
         
         {userName ?(<SelectFromTaskList 
         user={userName}
         isAllUsers={btnValue}         
         />):null}
         <ShowWorkBook history={history} />
    </div>
  )
}
