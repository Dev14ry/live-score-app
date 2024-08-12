
import './App.css';
import {Button} from '@mui/material';
import Navbar from './components/Navbar';
import {MyCard} from './components/MyCard';
import upComingMatches  from './api/Api';
import { useEffect, useState } from 'react';

function App() {

  // useEffect(()=>{
  //   upComingMatches()
  //     .then((data)=>console.log("DAta",data))
  //     .catch()
  // },[]);

const[matches,setMatches] = useState([]);

useEffect(()=>{
upComingMatches()
.then((data)=>setMatches(data.matches))
.catch((err)=>alert("Could not load Data."))
})
  
  return (
    <div className="App">
    <Navbar/>
      <h1>Welcome to LiveScore App</h1>
      
     {
      matches && matches.map((match)=>(
        <MyCard match="match"/>
      ))
     }
     {/* <MyCard/> */}
    </div>
  );
}

export default App;
