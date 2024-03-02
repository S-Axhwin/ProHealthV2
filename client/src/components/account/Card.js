import React from 'react'
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import Person2Icon from '@mui/icons-material/Person2';

const Card = (props) => {
  return (
    <Grid item>
        <Paper
          sx={{
            height: "15rem",
            width: "fit-content",
            padding: '0 2rem',
            display: 'flex',

            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
          
        >
          {props.doc?<LocalHospitalOutlinedIcon  sx={{color: 'red'}}/>:<Person2Icon/>}
          <div style={{display: 'flex', justifySelf: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column'}} >
          <div>
            {props.name}
          </div>
          <div>
            {props.email}
          </div>
          </div>
          </div>
          <img src={props.doc?'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=':""} />
        </Paper>
        
    </Grid>
  )
}

export default Card