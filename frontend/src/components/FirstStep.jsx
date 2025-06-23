import React, {useState} from 'react'
import {Button,  TextField} from '@mui/material'
import { useTwoStepContext } from './StepContext';
import { validateStepOne } from '../utils/validation';


export default function FirstStep() {
    const { setCurrentStep, userData, setUserData } = useTwoStepContext();
    const [errors, setErrors] = useState({});

    const handleNext = () => {
    const validationErrors = validateStepOne(userData);
    if (Object.keys(validationErrors).length === 0) {
      setCurrentStep(2);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
        <div>
            <TextField label= "Fullname" value={userData['fullname']} onChange={(e)=>setUserData({...userData, 'fullname' : e.target.value})} margin='normal' variant='outlined' color='secondary' error={!!errors.fullname} helperText={errors.fullname}/>
        </div>
        <div>
            <TextField label= "Email" value={userData['email']} onChange={(e)=>setUserData({...userData, 'email' : e.target.value})} margin='normal'  variant='outlined' color='secondary' error={!!errors.email} helperText={errors.email}/>
        </div>
        <div>
            <TextField label= "Contact Number" value={userData['contact']} onChange={(e)=>setUserData({...userData, 'contact' : e.target.value})} margin='normal'  variant='outlined' color='secondary' error={!!errors.contact} helperText={errors.contact}/>
        </div>
        <div>
            <Button variant='contained'  onClick={handleNext} color='primary'>Next</Button>
        </div>
      
    </div>
  )
}
