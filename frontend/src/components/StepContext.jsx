import React, { useState, createContext, useContext } from 'react'
import  registerUser  from '../api/registerUser';
export const twoStepContext =createContext();
export const useTwoStepContext = () => useContext(twoStepContext);


export const TwoStepProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });
    const [finalData, setFinalData] = useState([]);

    async function submitData() {
    try {
        const response = await registerUser(userData);
        if (response.status === 200) {
            setFinalData([...finalData, userData]);
            console.log("Registration successful:", response.data);
            // Reset userData after registration
            setUserData({
          fullname: '',
          email: '',
          contact: '',
          password: '',
          confirmPassword: ''
        });
            setCurrentStep(1); // Reset to first step
        } else {
            console.error("Registration failed:", response.data);
        }
    } catch (error) {
        console.error("Error registering:", error);
    }
  }

    return(
        <div>
            <twoStepContext.Provider value ={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData}} >
                {children}
            </twoStepContext.Provider>
        </div>
    )
}
