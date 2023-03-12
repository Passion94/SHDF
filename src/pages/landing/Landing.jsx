
import { Box, Button, Typography } from "@mui/material"


export default function Landing() {
  return (
    <Box sx={{
      backgroundImage:`url(https://www.fpri.org/wp-content/uploads/2021/10/climate-change-3-scaled.jpeg)`,
      backgroundColor:"black",
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundAttachment:'fixed',
      height:600,
      width:"100%",
      display:'flex', justifyContent:'center'
      }}>
       <Box  sx={{width:{xs:"100%", sm:'50%', md:'40%'}, padding:{xs:2,sm:3, md:20}, display:'flex', alignItems:'center', flexDirection:'column'}}>
<Box sx={{background:'white', Height:150, width:'100%', opacity:'0.8', color:'red', fontWeight:'700' }}>
 <Typography variant='h6' align="center"  pt={2}>Millions of children in Turkey needs help </Typography>
 <Typography variant='h3' align="center" color={'black'} pb={2}  >Earthquake Appeal </Typography>
 
 </Box>
 <Button variant='contained' sx={{marginTop:'20px', display:'flex',
  justifyContent:'center', backgroundColor:'#32CD32', 
  '&:hover':{backgroundColor:'black'}
  }}>Learn more </Button>
 </Box>
 
 </Box>
  )
  }