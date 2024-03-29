import Home from './Home'
import { useNavigate } from 'react-router-dom'

const HomePage = ()=>{
    const Navigate = useNavigate();
    const login = async (email, password) => {
        const res = await fetch("http://localhost:5002/auth/Plogin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const respond = await res.json();
        console.log(respond);
        if(respond.status){
            localStorage.setItem("token", JSON.stringify({token: respond.token}));
            localStorage.setItem("name", respond.name)
            Navigate("/doctors");
        }
    }
    const reg = async (email, password, name) => {
        const res = await fetch("http://localhost:5002/auth/Preg", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        });
        const respond = await res.json();
        console.log(respond);
        if(respond.status){
            console.log(respond);
            localStorage.setItem("token", JSON.stringify({token: respond.token}));
            localStorage.setItem("name", name) 
            
        }
    }

    return (
    <>
        <Home login={login} reg={reg} ></Home>
    </>)
}

export default HomePage