import React from 'react'
import {Button,  TextField} from '@mui/material'
import { useTwoStepContext } from './StepContext';

export default function SecondStep() {
    const { setCurrentStep,  userData, setUserData,submitData } = useTwoStepContext();
  return (
    <div>
        <div>
            <TextField label='Password' margin='normal' value={userData['password']} onChange={(e)=>setUserData({...userData, 'password' : e.target.value})} variant='outlined' color='secondary'/>
        </div>
        <div>
            <TextField label='Confirm Password' margin='normal' value={userData['confirmPassword']} onChange={(e)=>setUserData({...userData, 'confirmPassword' : e.target.value})} variant='outlined' color='secondary'/>
        </div>
        <div>
            <Button sx={{ mr: 2 }} variant='contained' onClick={()=>setCurrentStep(1)} color='secondary' >Back</Button>
            <Button variant='contained' onClick={submitData} >Register</Button>
        </div>
    </div>
  )
}
