import React, { } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { Stepper, StepLabel, Step, Container } from '@mui/material'
import { useTwoStepContext } from './StepContext'

export default function RegisterPage() {

    const {currentStep}= useTwoStepContext();
    function showStep(step){
        console.log("step:",step)
        switch(step){
            case 1 :
                return <FirstStep/>
            case 2 :
                return <SecondStep/>     
        }
    }
  return (
    <Container
      maxWidth='sm'
      style={{
        marginTop: '2rem',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
       <h2 style={{color:'#1976d2'}}>Two Step Registration Form</h2>
        <div className='center-stepper'>
          <Stepper style={{width: '100%'}} activeStep={currentStep-1} orientation='horizontal' >
            <Step >
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
    </Container>
  )
}
