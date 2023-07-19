import React, { useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select
} from "@material-tailwind/react";

export default function Login() {
  const [type, setType] = useState()

  const typeFunction = (e) => {
    setType(e)
  }
  return (
    <Card color="transparent" className='items-center mt-24' shadow={false}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Admin Login</h2>

      </div>

      <form className="mt-8 mb-2 w-60 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type={'text'} size="lg" name='username' label="Username" />
          <Input type={'text'} size="lg" name='password' label="Password" />
        </div>

        <Button className="mt-6" fullWidth>
          Login
        </Button>

      </form>
    </Card>
  )
}
