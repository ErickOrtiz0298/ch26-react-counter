import ButtonMui from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

export const Button = ({children,setcounter,newValue,style}) => {

/*     const handleOnclick = (event) =>{
        setcounter(newValue);
    } */

  return (
    <>
    <ButtonMui variant="contained" startIcon={<SendIcon />} 
    onClick={ ()=> setcounter(newValue) }>
    {children}
</ButtonMui>
      {/* <button style={style} onClick={ ()=> setcounter(newValue)  }>
        {children}
      </button> */}
    </>
    
  )
};
