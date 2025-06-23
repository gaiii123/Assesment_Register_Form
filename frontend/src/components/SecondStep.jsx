import React,{useState} from 'react'
import {Button,  TextField} from '@mui/material'
import { useTwoStepContext } from './StepContext';
import { validateStepTwo } from '../utils/validation';

export default function SecondStep() {
    const { setCurrentStep,  userData, setUserData,submitData } = useTwoStepContext();
    const [errors, setErrors] = useState({});   

    const handleSubmit = () => {
    const validationErrors = validateStepTwo(userData);
    if (Object.keys(validationErrors).length === 0) {
      submitData();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
        <div>
            <TextField label='Password' margin='normal' value={userData['password']} onChange={(e)=>setUserData({...userData, 'password' : e.target.value})} variant='outlined' color='secondary' error={!!errors.password}
        helperText={errors.password}/>
        </div>
        <div>
            <TextField label='Confirm Password' margin='normal' value={userData['confirmPassword']} onChange={(e)=>setUserData({...userData, 'confirmPassword' : e.target.value})} variant='outlined' color='secondary' error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}/>
        </div>
        <div>
            <Button sx={{ mr: 2 }} variant='contained' onClick={()=>setCurrentStep(1)} color='secondary' >Back</Button>
            <Button variant='contained' onClick={handleSubmit} >Register</Button>
        </div>
    </div>
  )
}
