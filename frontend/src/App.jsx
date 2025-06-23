import React from 'react'
import './App.css'
import RegisterPage from './components/RegisterPage'
import { TwoStepProvider } from './components/StepContext'
export default function App() {
  return (
    <div className='App'>
      <div className='App-header'> 
        <TwoStepProvider>
          <RegisterPage/>
        </TwoStepProvider>
      </div>
    </div>
  )
}
