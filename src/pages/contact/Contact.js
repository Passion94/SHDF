import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import './contact.css'
import Iframe from 'react-iframe'
import { Email, Phone,Room } from '@mui/icons-material'

const Contact = () => {
 
  return (
    <Box sx={{backgroundColor:'teal'}}>
    <Container align={'center'} sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center'}}>
    <Container flex={6} sx={{ backgroundColor:'white', height:'550px', marginTop:'50px', marginBottom:'50px',paddingBottom:'50px'}} >
      
      <form>
      <Typography variant='h4' align='center' m={5}>Contact us today </Typography>
      <Stack direction={'column'} gap={4} align={'center'} >
<Box sx={{display:'flex', gap:'20px', justifyContent:'center'}}>
<Box
component={'input'}
 type='text'
  placeholder='Firstname'
  className='styledInputs'
  
/>

<Box 
component={'input'}
 type='text'
   placeholder='Lastname'
   className='styledInputs'
  
/>
</Box>

<Box sx={{display:'flex', gap:'20px', justifyContent:'center'}}>
<Box
component={'input'}
 type='text'
   placeholder='Email'
   className='styledInputs contactemailsubjects'
 
/>
<Box
component={'input'}
type='text'
   placeholder='Comapny/Organisation'
   className='styledInputs contactemailsubjects'
   
/>
</Box>

<Box>
<Box
component={'input'}
type='text'
   placeholder='Subject'
   className='styledInputs '
   
/>
</Box>
<Box>
<textarea 
   placeholder='Write your message'
   className='styledInputs contactTextarea'
/>
</Box>




</Stack>

      </form>
      

    </Container>
    <Container flex={3} sx={{backgroundColor:'#39487a', height:'550px', color:'white'}}>
    <Typography variant='h4' m={5}> Contact Information</Typography>
   <Typography variant='body1'> Do you want to meet with us physically, you can visit us in any of this locations</Typography>
   
   <Stack direction={'column'}>
   <Button startIcon={<Room/>} sx={{color:'white'}} href="https://goo.gl/maps/483Gc62VDLfuHm126" target="_blank"> <Typography sx={{color:'#e5e4e2'}}>No 12 hilltop road lagos, Nigeria</Typography></Button>
   <Button startIcon={<Phone/>} 
   sx={{color:'white'}}  value={Phone}
    href={`tel:${Phone}`} ><Typography sx={{color:'#e5e4e2'}}>
    08066685798
    </Typography>
     </Button>
   <Button startIcon={<Email/>} sx={{color:'white'}} href="mailto:name@email.com"> <Typography sx={{color:'#e5e4e2'}}> Susewhumandevelopment@gmail.com</Typography></Button>
   </Stack>
  
  
   
    </Container>
  
    </Container>
    
   
   </Box>
  )
}

export default Contact
