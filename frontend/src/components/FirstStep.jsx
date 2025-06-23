import React from 'react'
import {Button,  TextField} from '@mui/material'
import { useTwoStepContext } from './StepContext';


export default function FirstStep() {
    const { setCurrentStep, userData, setUserData } = useTwoStepContext();
  return (
    <div>
        <div>
            <TextField label= "Fullname" value={userData['fullname']} onChange={(e)=>setUserData({...userData, 'fullname' : e.target.value})} margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
            <TextField label= "Email" value={userData['email']} onChange={(e)=>setUserData({...userData, 'email' : e.target.value})} margin='normal'  variant='outlined' color='secondary'/>
        </div>
        <div>
            <TextField label= "Contact Number" value={userData['contact']} onChange={(e)=>setUserData({...userData, 'contact' : e.target.value})} margin='normal'  variant='outlined' color='secondary'/>
        </div>
        <div>
            <Button variant='contained'  onClick={()=>setCurrentStep(2)} color='primary'>Next</Button>
        </div>
      
    </div>
  )
}
