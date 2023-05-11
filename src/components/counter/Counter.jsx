import React, { useState } from 'react';
import { Button } from '../button/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ButtonGroup} from 'react-bootstrap';
import { Typography,Container, Grid } from '@mui/material';
import { purple, red } from '@mui/material/colors';

//exportacion nombrada
export const Counter = ({initialValue=0,increment=1,decrement=1}) => {
    //Destructuracion   
    const [counter, setcounter] = useState(initialValue);

  return (
    <>
    <Container sx={{border:2,bgcolor:"gray"}} maxWidth="lg">
    <Grid sx={{m:0, bgcolor:"#111",color:"white"}} container spacing={2}>
  <Grid md={8} sx={12}>
    
    <Typography color={purple[700]} variant="h1" align='center'>Counter</Typography>
    
  </Grid>
  <Grid md={4} sx={12}>
    
    <Typography color= {purple[700]} variant="h2" align='center'>{counter}</Typography>
    
  </Grid>

  <Grid md={12}>
    
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button startIcon={<AddIcon/>} setcounter={setcounter} newValue={counter + increment}   ></Button>
        <Button startIcon={<RemoveIcon/>} setcounter={setcounter} newValue={counter - decrement}></Button>
        <Button startIcon={<RestartAltIcon/>} setcounter={setcounter} newValue={initialValue}>Reset</Button>
        </ButtonGroup>
    
  </Grid>
</Grid>
      </Container>
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
