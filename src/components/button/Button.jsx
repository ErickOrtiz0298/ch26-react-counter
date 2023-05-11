import ButtonMui from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

export const Button = ({children,setcounter,newValue,startIcon}) => {

/*     const handleOnclick = (event) =>{
        setcounter(newValue);
    } */

  return (
    <>
    <ButtonMui variant="contained" startIcon={startIcon} 
    onClick={ ()=> setcounter(newValue) }>
    {children}
    </ButtonMui>

    </>
    
  )
};
