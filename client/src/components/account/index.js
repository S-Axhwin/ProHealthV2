import React from 'react'
import { Grid } from '@mui/material'
import Card from './Card'
import { Outlet } from 'react-router-dom'

const index = (props) => {
  return (
    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', marginTop: '10rem'}}>
        <Grid container justifyContent="center" sx={{width: "40vw"}} spacing={3}>
        <Card name={'ashwin'}></Card>
        </Grid>
        <Outlet/>
    </Grid>

  )
}

export default index