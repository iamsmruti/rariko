import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Navbar from '../../../comps/Navbar'

const Hero = () => {
  return (
    <Box className="container" sx={{width: '100%', height: '100vh'}}>
      <Navbar />
      <Box sx={{width: '100%', height: '100% ', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography align='center' variant='h4' sx={{fontSize: {md: '66px', xs: '38px'}, fontWeight: 700, mt: 12}}>Time to Colonize</Typography>
        <Stack direction={'row'}>
          <Typography align='center' variant='h4' sx={{fontSize: {md: '66px', xs: '38px'}, fontWeight: 700}}>the world of </Typography> 
          <Typography align='center' variant='h4' sx={{fontSize: {md: '66px', xs: '38px'}, fontWeight: 700, color: 'red', ml: 2}}>web 3.0 </Typography>
        </Stack>
        
        <Typography align='center' variant='h4' sx={{fontSize: {md: '66px', xs: '38px'}, fontWeight: 700, mb: 12}}>with different communities</Typography>

        <a style={{background: '#5a2cbb', padding: '0.5rem 1rem', borderRadius: '25px', marginLeft: 'auto', marginRight:'auto'}}>Get Onboarded</a>
      </Box>
    </Box>
  )
}

export default Hero