import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Option,
  Select
} from "@material-tailwind/react";

export default function PaperCreate() {

  const [type, setType] = useState()

  const typeFunction = (e) => {
    setType(e)
  }

  return (
    <Card color="transparent" className='items-center' shadow={false}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Create Paper</h2>

      </div>

      <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type={'text'} size="lg" name='grade' label="Grade" />
          <Input type={'text'} size="lg" name='subject' label="Subject" />
          <Input type={'text'} size="lg" name='year' label="Year" />
          <Select onChange={typeFunction} label="Type">
            <Option value='school'>School</Option>
            <Option value='province'>Province</Option>
            <Option value='division'>Division</Option>
            <Option value='past'>Past</Option>
            <Option value='model'>Model</Option>
          </Select>
          {
            type === 'school' ? <Input type={'text'} size="lg" name='school' label="School Name" /> :
              type === 'province' ? <Input type={'text'} size="lg" name='province' label="Province Name" /> :
                type === 'division' ? <Input type={'text'} size="lg" name='division' label="Division Name" /> :
                  type === 'model' ? <Input type={'text'} size="lg" name='model' label="Paper Author Name" /> : ''
          }
          <Input type={'file'} size="lg" name='pdf' label="Paper PDF" />
          <Input type={'file'} size="lg" name='img' label="Paper Image" />
          <Input type={'file'} size="lg" name='marking' label="Paper Marking" />

        </div>

        <Button className="mt-6" fullWidth>
          Sumbit
        </Button>

      </form>
    </Card>
  )
}
