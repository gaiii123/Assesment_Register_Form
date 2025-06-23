import React from 'react'
import {Button,  TextField} from '@mui/material'

export default function SecondStep() {
  return (
    <div>
        <div>
            <TextField label='Password' margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
            <TextField label='Confirm Password' margin='normal' variant='outlined' color='secondary'/>
        </div>
        <div>
            <Button variant='contained' color='primary' >Register</Button>
        </div>
    </div>
  )
}
