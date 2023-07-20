import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
  Option,
  Select
} from "@material-tailwind/react";
import { AuthContext } from './Auth';
import axios from 'axios';

export default function Login() {
  window.history.pushState(null, null);
  const [type, setType] = useState()
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logstate, setLogstate] = useState(false)

  const inputHandler = (e) => {
    e.target.name === 'username' ? setUsername(e.target.value) :
      e.target.name === 'password' ? setPassword(e.target.value) : console.log("incorrect field");
  }

  const authFunction = () => {


    axios({
      method: 'post',
      url: 'http://localhost:8000/admin',
      data: {
        username,
        password
      }
    }).then((res) => {
      if (res.data === true) {
        auth.login(true)
        window.localStorage.setItem("isLoggedIn", true)
        navigate('/admin')
        
      } else {
        setLogstate(true)
        auth.login(false)
      }


      
    }).catch((err) => {
      console.log(err);
    })
    // auth.login()
    // navigate('/admin')
  }

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
          <Input onChange={inputHandler} type={'text'} size="lg" name='username' label="Username" />
          <Input onChange={inputHandler} type={'password'} size="lg" name='password' label="Password" />
        </div>
        {logstate ? <p style={{ color: 'red' }}>Username or Password Incorrect</p> : ''}

        <Button className="mt-6" onClick={authFunction} fullWidth>
          Login
        </Button>

      </form>
    </Card>
  )
}
