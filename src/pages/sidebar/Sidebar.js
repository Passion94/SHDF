import { Avatar, Box,  styled, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'

const Sidebar = () => {
    const Title= styled(Typography)({
        color:'Black',
        borderTop:'2px dotted #e34e09',
        borderBottom:'2px dotted #e34e09',
        marginBottom:'10px',
        fontWeight:'600',
        display:'flex',
        justifyContent:'center',
        marginTop:'30px',
        fontFamily:'Barlow Condensed'
        
       

    })
    const ListTypography = styled(Typography)({
        paddingBottom:'10px',
        fontSize:'12px',
        fontFamily:'Montserrat'
        
        
    })
  return (
    <Box sx={{backgroundColor:'#fdfbfb', padding:'30px'}}>
    <Box>
      <Title variant='body1'> About Us</Title>
        <Avatar  
        sx={{height:'100%', width:'100%'}}    
         src='https://madison365.com/wp-content/uploads/2019/07/FFBWW-Group-Image-1.jpg'
        variant='square'
         
         >

        </Avatar>
          <Typography align='center' sx={{fontSize:'12px', fontFamily:'Montserrat'}} mt={5}> typesetting, remaining essentially unchanged.
           It was popularised in the 1960s with the release of Letraset 
           sheets containing Lorem Ipsum passages, and more.</Typography>
    </Box>
    <Title variant='body1' >Focus Areas</Title>
   
      
      <Stack direction={'row'} align={'center'} >
      <Container>
      <ListTypography >Climate</ListTypography>
      <ListTypography>Human development</ListTypography>
      <ListTypography>Environments</ListTypography>
      <ListTypography>Women initiatives</ListTypography>
      </Container>
      <Container>
      <ListTypography>Youth activities</ListTypography>
      <ListTypography>Rights and priviledges</ListTypography>
      <ListTypography>Inclusive education</ListTypography>
      <ListTypography>Others</ListTypography>
      </Container>
      </Stack>
      </Box>
  )
}

export default Sidebar;
