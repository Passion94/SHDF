import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import {Facebook, Instagram,  Twitter} from '@mui/icons-material'
import React from 'react'


const Footer = () => {
    const SocialBox = styled (Box)({
        display:'flex',
        gap:10,
        color:'white',
        alignItems:'center',
        justifyContent:'center'
      })
    
    const ListTypography = styled(Typography)({
        color:'white',
        fontWeight:'400',
        fontSize:'14px',
        cursor:'pointer',
        paddingTop:'5px'
        
        
    })
  return (
    <Box bgcolor={'#32CD32'} sx={{height:"200px"}} pb={5}>
      <Stack direction={{xs:'colmun', sm:'row', md:'row'}} p={7} bgcolor={'black'} sx={{height:"100px"}}  >
      <Box flex={1}>
    
        <ListTypography  align={'center'}>
        Contact Us
         </ListTypography>
         <ListTypography  align={'center'}>
        About Us
         </ListTypography>
         <ListTypography  align={'center'}>
        Volunteer
         </ListTypography>
      </Box>
      <Box flex={1}>
     
        <ListTypography  align={'center'}>
        Activities
         </ListTypography>
         <ListTypography  align={'center'}>
        Projects
         </ListTypography>
         <ListTypography  align={'center'}>
        Fashion bouquet
         </ListTypography>
      </Box>
      <Box flex={1}>
      
      <ListTypography  align={'center'}>
        Categories
         </ListTypography>
        <ListTypography  variant={'body2'} align={'center'}>
        Kids
         </ListTypography>
         <ListTypography  variant={'body2'} align={'center'}>
        Women
         </ListTypography>
         <ListTypography  variant={'body2'} align={'center'}>
        Men
         </ListTypography>
      </Box>
      <Box> 
      <ListTypography align={'center'}>
       Follows us 
         </ListTypography>
         <SocialBox sx={{cursor:'pointer'}} align={'center'}>
       <Facebook/>
       <Instagram/>
       <Twitter/>
        </SocialBox>
      </Box>
      
       </Stack>
       <ListTypography align={'center'}>© 2023 SHDF, Inc.</ListTypography>
    </Box>
  )
}

export default Footer;
