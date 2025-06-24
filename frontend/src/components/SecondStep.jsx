import React, { useState } from 'react';
import { Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTwoStepContext } from './StepContext';
import { validateStepTwo } from '../utils/validation';

export default function SecondStep() {
    const { setCurrentStep, userData, setUserData, submitData } = useTwoStepContext();
    const [errors, setErrors] = useState({});   
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = () => {
        const validationErrors = validateStepTwo(userData);
        if (Object.keys(validationErrors).length === 0) {
            submitData();
        } else {
            setErrors(validationErrors);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev);
    };

    return (
        <div>
            <div>
                <TextField 
                    label='Password' 
                    type={showPassword ? 'text' : 'password'} 
                    margin='normal' 
                    value={userData['password']} 
                    onChange={(e) => setUserData({...userData, 'password': e.target.value})} 
                    variant='outlined' 
                    color='secondary' 
                    error={!!errors.password}
                    helperText={errors.password} 
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={toggleShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div>
                <TextField 
                    label='Confirm Password' 
                    type={showConfirmPassword ? 'text' : 'password'} 
                    margin='normal' 
                    value={userData['confirmPassword']} 
                    onChange={(e) => setUserData({...userData, 'confirmPassword': e.target.value})} 
                    variant='outlined' 
                    color='secondary' 
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword} 
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={toggleShowConfirmPassword} edge="end">
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div>
                <Button sx={{ mr: 2 }} variant='contained' onClick={() => setCurrentStep(1)} color='secondary'>Back</Button>
                <Button variant='contained' onClick={handleSubmit}>Register</Button>
            </div>
        </div>
    )
}