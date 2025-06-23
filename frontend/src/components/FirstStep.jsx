import React from 'react'
import {Button,  TextField} from '@mui/material'


export default function FirstStep() {
  return (
    <div>
        <div>
            <TextField label= "Fullname" margin='normal'  variant='outlined' color='secondary'/>
        </div>
        <div>
            <TextField label= "Email" margin='normal'  variant='outlined' color='secondary'/>
        </div>
        <div>
            <TextField label= "Contact Number" margin='normal'  variant='outlined' color='secondary'/>
        </div>
        <div>
            <Button variant='contained' color='primary'>Next</Button>
        </div>
      
    </div>
  )
}
