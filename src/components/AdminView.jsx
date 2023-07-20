import React, { useState,useContext, useEffect } from 'react'
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
import { AuthContext} from './Auth';
import { useNavigate } from 'react-router-dom';

export default function AdminView() {
  window.history.pushState(null, null);

  const [form,setForm] = useState()
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const authFunction = ()=>{
    auth.logout()
    window.localStorage.removeItem("isLoggedIn")
    navigate('/login')
  }

  const selectFunction = (e) => {
    setForm(e)
  }
  return (
    <div >
      <Button className="mt-6 mb-5" onClick={authFunction} fullWidth>
          Logout
        </Button>
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

