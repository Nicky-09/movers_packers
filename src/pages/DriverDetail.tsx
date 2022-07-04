import { TextField } from '@mui/material';
import React from 'react'
import Icons from '../components/Icons';

function DriverDetail() {
  return (
    <div><div><div className="pods-logo">
    <Icons />
  </div>
  <div className='textfield-container'>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>

  </div>
  </div></div>
  )
}

export default DriverDetail