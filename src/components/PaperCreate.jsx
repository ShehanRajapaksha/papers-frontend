import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Option,
  Select
} from "@material-tailwind/react";
import axios from 'axios';

export default function PaperCreate() {

  const [type, setType] = useState('')
  const [term, setTerm] = useState('')

  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [year, setYear] = useState('')
  const [school, setSchool] = useState('')
  const [province, setProvince] = useState('')
  const [division, setDivision] = useState('')
  const [past, setPast] = useState('')
  const [model, setModel] = useState('')
  const [pdf, setPdf] = useState('')
  const [img, setImg] = useState('')
  const [marking, setMarking] = useState('')

  const inputHandler = (e) => {
    e.target.name === 'grade' ? setGrade(e.target.value) :
      e.target.name === 'subject' ? setSubject(e.target.value) :
        e.target.name === 'year' ? setYear(e.target.value) :
          e.target.name === 'school' ? setSchool(e.target.value) :
            e.target.name === 'province' ? setProvince(e.target.value) :
              e.target.name === 'division' ? setDivision(e.target.value) :
                e.target.name === 'past' ? setPast(e.target.value) :
                  e.target.name === 'model' ? setModel(e.target.value) :
                    e.target.name === 'pdf' ? setPdf(e.target.files[0]) :
                      e.target.name === 'img' ? setImg(e.target.files[0]) :
                        e.target.name === 'marking' ? setMarking(e.target.files[0]) : console.log("incorrect field")
  }

  const submitHandler = (e) => {
    const formdata = new FormData()
    formdata.append('grade', grade)
    formdata.append('subject', subject)
    formdata.append('year', year)
    formdata.append('type', type)
    formdata.append('term', term)
    formdata.append('school', school)
    formdata.append('province', province)
    formdata.append('division', division)
    formdata.append('past', past)
    formdata.append('model', model)
    formdata.append('pdf', pdf)
    formdata.append('img', img)
    formdata.append('marking', marking)

    axios.post('http://localhost:8000/paper', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(()=>{
      window.location.reload()
    }).catch(err => {
      console.log(err);
    })
  }



  const typeFunction = (e) => {
    setType(e)
  }
  const termFunction = (e) => {
    setTerm(e)
  }

  return (
    <Card color="transparent" className='items-center' shadow={false}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Create Paper</h2>

      </div>

      <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-96" >
        <div className="mb-4 flex flex-col gap-6">
          <Input onChange={inputHandler} value={grade} type={'text'} size="lg" name='grade' label="Grade" />
          <Input onChange={inputHandler} value={subject} type={'text'} size="lg" name='subject' label="Subject" />
          <Input onChange={inputHandler} value={year} type={'text'} size="lg" name='year' label="Year" />
          <Select onChange={typeFunction} value={type} label="Type">
            <Option  value='school'>School</Option>
            <Option value='province'>Province</Option>
            <Option  value='division'>Division</Option>
            <Option value='past'>Past</Option>
            <Option value='model'>Model</Option>
          </Select>
          {
            type === 'school' ? 
            <div>
              <Select value={term} onChange={termFunction} label="Term">
                <Option value='1'>1 Term</Option>
                <Option  value='2'>2 Term</Option>
                <Option  value='3'>3 Term</Option>
              </Select><br />
              <Input value={school} type={'text'} size="lg" onChange={inputHandler} name='school' label="School Name" />
            </div>
              :
              type === 'province' ? <Input type={'text'} size="lg" value={province} onChange={inputHandler} name='province' label="Province Name" /> :
                type === 'division' ? <Input type={'text'} size="lg" value={division} onChange={inputHandler} name='division' label="Division Name" /> :
                  type === 'model' ? <Input type={'text'} size="lg" value={model} onChange={inputHandler} name='model' label="Paper Author Name" /> : ''
          }
          <Input type={'file'} size="lg"  onChange={inputHandler} name='pdf' label="Paper PDF" />
          <Input type={'file'} size="lg"  onChange={inputHandler} name='img' label="Paper Image" />
          <Input type={'file'} size="lg"  onChange={inputHandler} name='marking' label="Paper Marking" />

        </div>

        <Button className="mt-6" onClick={submitHandler} fullWidth>
          Sumbit
        </Button>

      </form>
    </Card>
  )
}
