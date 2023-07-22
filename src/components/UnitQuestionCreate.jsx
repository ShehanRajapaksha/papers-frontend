import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';

export default function UnitQuestionCreate() {

  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [unit, setUnit] = useState('')
  const [pdf, setPdf] = useState('')

  const inputHandler = (e) => {
    e.target.name === 'grade' ? setGrade(e.target.value) :
      e.target.name === 'subject' ? setSubject(e.target.value) :
        e.target.name === 'unit' ? setUnit(e.target.value) :
          e.target.name === 'pdf' ? setPdf(e.target.files[0]) : console.log("incorrect field")
  }

  const submitHandler = (e) => {
    const formdata = new FormData()
    formdata.append('grade', grade)
    formdata.append('subject', subject)
    formdata.append('unit', unit)
    formdata.append('pdf', pdf)
    axios.post('http://localhost:8000/unitquestion', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      window.location.reload()
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <Card color="transparent" className='items-center' shadow={false}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Create Unit Question</h2>

      </div>

      <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type={'text'} onChange={inputHandler} size="lg" name='grade' label="Grade" />
          <Input type={'text'} onChange={inputHandler} size="lg" name='subject' label="Subject" />
          <Input type={'text'} onChange={inputHandler} size="lg" name='unit' label="Subject Unit" />
          <Input type={'file'} onChange={inputHandler} size="lg" name='pdf' label="Unit Question PDF" />

        </div>

        <Button onClick={submitHandler} className="mt-6" fullWidth>
          Sumbit
        </Button>

      </form>
    </Card>
  )
}
