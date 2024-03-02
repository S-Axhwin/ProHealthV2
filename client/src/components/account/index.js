import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Card from './Card'
import { Outlet } from 'react-router-dom'


const index = (props) => {
  const name = localStorage.getItem("name")
  function logout(){    
      localStorage.clear();
      props.setauth(false)
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', marginTop: '10rem'}}>
        <Grid container justifyContent="center" sx={{width: "40vw"}} spacing={3}>
        <Card name={name}></Card>
        </Grid>

        <Outlet/>
    </Grid>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <button onClick={logout} >LOGOUT</button>
    </div>
    </div>

  )
}

export default index