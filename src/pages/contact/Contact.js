import { Container, TextField } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'


const Contact = () => {
  return (
   
      <Container>

    <Box>

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      
      <Box>
        <TextField
          label=""
          id="name"
          defaultValue="Full Name"
          size="small"
          type={'text'}
        />
         <TextField
          label=""
          id="outlined-size-small"
          defaultValue="Email"
          size="small"
          type={'email'}
        />
        </Box>
        <Box>
        <TextField
          label=""
          id="outlined-size-small"
          defaultValue="Subject"
          size="small"
        />
        </Box>
        <Box>
        <TextField
          label=""
          id="outlined-size-small"
          defaultValue="Small"
          size="large"
        />
        </Box>
        
        
      
     
      
    </Box>

    </Box>
    <Box>
        
        </Box>


      </Container>
    
  )
}

export default Contact
