import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Add = () => {

  return (
    <div>
      <Stack
      component="form"
      sx={{
        width: '25ch',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'200px'
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
       name='empname'
       
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Blog Name'
        variant="filled"
        size='small'
      />
      <TextField
          id="filled-multiline-static"
          placeholder='Description'
          multiline
          rows={4}
          
          variant="filled"
        />
      <TextField
       name='empnamde'
       
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Author Name'
        variant="filled"
        size='small'
      />
      <Button variant='contained' color='success' className='btn' >Post</Button>
    </Stack>
    </div>
  )
}

export default Add
