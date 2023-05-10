import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import React from 'react'

export const NavBar = () => {
  return (
    <>
              <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
        
    </>
  )
}
