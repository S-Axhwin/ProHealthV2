import Card  from '../account/Card'
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
const Doctor = () => {
  const [doctors, setDoctors] = useState();
  useEffect(()=>{
    const fetchApi = async ()=>{
      const rawdata = await fetch("http://localhost:5002/auth/getinfo");
      const fulldata = await rawdata.json();
      const data = (fulldata.arr);
      setDoctors(data)

    }
    fetchApi()
  })
  return (
    <>
    <Grid item xs={12} sx={{marginTop: '8rem'}}>
        <Grid container justifyContent="center" spacing={3} sx={{padding: '4rem'}}>
    {doctors?.map((item)=>{
        return(<Card name={item.name} email={item.email} doc={true} ></Card>)
    })}
        </Grid>
    </Grid>
    <Outlet></Outlet>
    </>
  )
}

export default Doctor