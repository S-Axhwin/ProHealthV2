import React from 'react'
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

const Card = () => {
  return (
    <Grid item>
        <Paper
          sx={{
            height: 140,
            width: 100,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        />
          
    </Grid>
  )
}

export default Card