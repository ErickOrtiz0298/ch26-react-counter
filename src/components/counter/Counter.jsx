import React from 'react'

export const Counter = () => {
    let counter = 100; 
    const handleIncrement = () =>{
        console.log(++counter);
    }
  return (
    <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button   >+</button>
        <button>-</button>
        <button>Reset</button>
    </>
  )
}