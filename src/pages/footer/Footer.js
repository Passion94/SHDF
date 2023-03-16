import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import {Facebook, Instagram,  Twitter} from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'


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
    const ContactItems=[
      {Id:1, Name:"Contact Us", link:"/contact"},
      {Id:2, Name:"About Us", link:"/everyabout"},
      {Id:3, Name:"Volunteer", link:"/contact"}
    ]
    const ActivityItems=[
      {Id:1, Name:"Activities", link:"/project"},
      {Id:2, Name:"Projects", link:"/project"},
      {Id:3, Name:"Blog", link:"/blog"}
    ]
    const StyledLink=styled(Link)({
      textDecoration:'none',
      color:'white',
      fontFamily: 'Montserrat',
    })
  return (
    <Box bgcolor={'#32CD32'} sx={{height:"150px"}} pb={5}>
      <Stack direction={{xs:'row', sm:'row', md:'row'}} p={{xs:'2', sm:'5', md:'7'}} bgcolor={'black'} sx={{height:"130px", marginTop:'10px', paddingTop:'20px'}}  >
      <Box flex={1}>
      {ContactItems.map((item, index) =>
     <StyledLink key={index} to={item.link}><ListTypography align={'center'} >{item.Name}</ListTypography></StyledLink>
      )}
       
      </Box>
      <Box flex={1}>
     
      {ActivityItems.map((item, index) =>
     <StyledLink key={index} to={item.link}><ListTypography align={'center'} >{item.Name}</ListTypography></StyledLink>
      )}
      </Box>
      
      <Box flex={1}> 
      <ListTypography align={'center'}>
       Follows us 
         </ListTypography>
         <SocialBox sx={{cursor:'pointer'}} align={'center'} >
         <a style={{color:'white'}} href="https://www.facebook.com/SusewFoundation/https://www.facebook.com/SusewFoundation/" target="blank"> <Facebook/></a>
       <a style={{color:'white'}} href="https://twitter.com/Susewfoundation?t=9wbYtaUFN5LTLud43rpp9Q&s=09" target="blank"><Instagram /></a>
       <a style={{color:'white'}} href="#" target="blank"> <Twitter/></a>
        </SocialBox>
      </Box>
      
       </Stack>
       <Box>
       <ListTypography sx={{display:'flex', alignItems:'center', justifyContent:'center', margin:'20 20',padding:'auto'}}>© 2023 SHDF, Inc.</ListTypography>
       </Box>
       
    </Box>
  )
}

export default Footer;
