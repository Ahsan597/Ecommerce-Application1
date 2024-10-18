import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#F0F583' : '#F0F583',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Sales() {

  return (
    <div className='divmain'>
       <Box  sx={{ flexGrow: 1, width:"70%", marginLeft:"24vmax", marginTop:"-47vmax" }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item sx={{height:"60vh" , color: "black", fontWeight: "bolder"}}>Weekly Sales</Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{height:"60vh", color: "black", fontWeight: "bolder"}}>Monthly Sales</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
