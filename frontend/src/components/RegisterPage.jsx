import React from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { Stepper, StepLabel, Step } from '@mui/material'

export default function RegisterPage() {

    function showStep(step){
        switch(step){
            case 1 :
                return <FirstStep/>
            case 2 :
                return <SecondStep/>     
        }
    }
  return (
    <div>
       <h2 style={{color:'red'}}>Two Step Registration Form</h2>
        <div className='center-stepper'>
          <Stepper style={{width: '100%'}} activeStep='1' orientation='horizontal' >
            <Step >
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(1)}   
    </div>
  )
}
