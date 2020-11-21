import React from 'react'
import{PageHeader} from '../shared/PageHeader'
import { SelectFromList } from '../shared/SelectFromList'
import { InputFile } from './InputFile'
import {ShowWorkBook} from './ShowWorkBook'

export const ReadFile = () => {
  return (
    <div className="container mt-2">
      <PageHeader word1="Read" word2="Excel File" />
         <InputFile />
         <SelectFromList />
         <ShowWorkBook />
    </div>
  )
}
