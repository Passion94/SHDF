import React from 'react'
import { Box, Stack, Typography, styled } from '@mui/material'

const Categories = () => {
    const StyledBox=styled(Box)({
cursor:'pointer',
width:'100%',
height:200,
backgroundRepeat:'no-repeat',
backgroundSize:'cover',
backgroundPosition:"center",

    })
    const StyledTypography = styled(Typography)({
        background:'white',
        opacity:'0.8',
        margin:'25% 50px 25% 50px',
        // alignItems:'center'
    })
  return (
    <div>
      <Stack direction={{xs:'column',sm:'column', md:'row'}} spacing={2} mt={5}>
        <StyledBox sx={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEMuABpTVQ2S1lrXwmUEtedIBhA4JY5Arwg&usqp=CAU)`}} > 
        <StyledTypography variant='h3' align='center'>Kids</StyledTypography>
        </StyledBox>
        <StyledBox sx={{backgroundImage:`url(https://images.herzindagi.info/image/2020/Nov/Items-Women-Love-To-Buy-From-Mens-Sectionssssss.jpg)`}}>
         <StyledTypography variant='h3' align='center'>Women</StyledTypography>
         </StyledBox>
        <StyledBox sx={{backgroundImage:`url(https://thumbs.dreamstime.com/b/manneqiuns-section-men-clothes-shop-8778261.jpg)`}}>

         <StyledTypography variant='h3' align='center'>Men</StyledTypography>
         </StyledBox>
      </Stack>
    </div>
  )
}

export default Categories
