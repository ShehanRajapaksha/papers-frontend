import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";

export default function UnitQuestionCreate() {
  
  return (
    <Card color="transparent" className='items-center' shadow={false}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Create Unit Question</h2>

      </div>

      <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type={'text'} size="lg" name='grade' label="Grade" />
          <Input type={'text'} size="lg" name='subject' label="Subject" />
          <Input type={'text'} size="lg" name='unitname' label="Subject Unit" />
          <Input type={'file'} size="lg" name='pdf' label="Unit Question PDF" />

        </div>

        <Button className="mt-6" fullWidth>
          Sumbit
        </Button>

      </form>
    </Card>
  )
}
