import React, { useEffect, useState } from 'react'
import Navbar from "./components/common/Navbar"
import Home from './components/home/index'
import Login from './components/login/Login'
import Doctor from './components/Doctor/index'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Account from './components/account/index'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import Card from './components/account/Card'
const OtherId = (props)=>{
  const {name} = useParams();
  const [datas, setdatas] = useState([]);
  async function fetchUser(name){
    try{
      const rawData = await fetch(`http://localhost:5002/auth/${name}`)
      const data = await rawData.json();
      setdatas(data)
      console.log(data);
    }catch(err){
      setdatas('user not found')
    }
  }
  useEffect(()=>{
    fetchUser(name)
  }, [])
  console.log('this: ',datas.result);;
  return (
  <>
    <Grid item xs={12} sx={{marginTop: '3rem'}}>
    <Grid container justifyContent="center" spacing={3}>
      <Card name={datas?.result?.name} email={datas?.result?.email} ></Card>
      </Grid>
    </Grid>
  </>)
}
const App = () => {
  const [auth, setauth] = useState(false);
  const Navi = useNavigate();
  useEffect(()=>{
    
    var localToken = localStorage.getItem("token")
    localToken = JSON.parse(localToken)
    async function tokenCheck() {
      if(localToken){
        const res = await fetch("http://localhost:5002/auth/Pcheck", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token:localToken})
        })
        if(res.status){
          setauth(true);
        }
      }
  }
  tokenCheck()
  }, [])
  return (
    <>
    <Navbar auth={auth}></Navbar>
    <Routes>
      <>
      {!auth?(
        <>
          <Route path='/' element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />
        </>
      ):(
        <>
          <Route path='/doctors' element={<Doctor></Doctor>} ></Route>
          <Route path='/doctors/:name' element={<OtherId></OtherId>} ></Route>
          <Route path='/account' element={<Account/>} >
          </Route>
          <Route path='/booking' element={<h2>booking</h2>} />
        </>
      )
      }
      </>
      
    </Routes>
    </>
  )
}

export default App