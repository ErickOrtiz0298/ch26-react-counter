import React, { useState } from 'react';
import { Button } from '../button/Button';

//exportacion nombrada
export const Counter = ({initialValue=0,increment=1,decrement=1}) => {
    //Destructuracion   
    const [counter, setcounter] = useState(initialValue);

  return (
    <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <Button style={{color:"blue"}} setcounter={setcounter} newValue={counter + increment}   >+</Button>
        <Button style={{color:"green"}} setcounter={setcounter} newValue={counter - decrement}>-</Button>
        <Button style={{color:"red"}} setcounter={setcounter} newValue={initialValue}>Reset</Button>
    </>
  );
};

/*
Hacer un componente para el boton. 
atributo: increment={5}
atributo: increment={-5}
atributo: onCLick = {fncCallBack}
color text:blue
 */
