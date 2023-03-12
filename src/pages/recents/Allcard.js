import React from 'react'
import { Box, Grid } from '@mui/material'
import Card from '../../components/cards/Card'

const Allcard = () => {
  return (
    <Box mt={10}>
 <Grid container rowSpacing={2} columnSpacing={{xs:1, sm:2, md:6}} >
 <Grid item md={6} xs={12} ><Card/></Grid>
 <Grid item md={6} xs={12}><Card/></Grid>
 <Grid item md={6} xs={12}><Card/></Grid>
 <Grid item md={6} xs={12}><Card/></Grid>
 <Grid item md={6} xs={12}><Card/></Grid>
 <Grid item md={6} xs={12} > <Card/></Grid>

      </Grid>
      
      
    </Box>
   
  )
}

export default Allcard;
