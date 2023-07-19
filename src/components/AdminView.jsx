import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select
} from "@material-tailwind/react";
import PaperCreate from './PaperCreate';
import NoteCreate from './NoteCreate';
import UnitQuestionCreate from './UnitQuestionCreate';

export default function AdminView() {
  const [form,setForm] = useState()

  const selectFunction = (e) => {
    setForm(e)
  }
  return (
    <div >
      <Card color="transparent" className='items-center' shadow={false}>
        <div className="w-60 sm:w-72 mt-3 mb-6">
          <Select  onChange={selectFunction} label="Select Create">
            <Option value='paper'>Paper</Option>
            <Option value='note'>Note</Option>
            <Option value='unitq'>Unit Question</Option>
          </Select>
        </div>
        {form==='paper'?<PaperCreate/>:form==='note'?<NoteCreate/>:form==='unitq'?<UnitQuestionCreate/>:''}
      </Card>
    </div>
  )
}

