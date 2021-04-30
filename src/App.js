import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MakeTeam from './components/MakeTeam/MakeTeam';
import playerData from './playersData/playersData.json';
import { useEffect, useState} from 'react';


function App() {
  const [players,setPlayers] = useState([]);
  useEffect(()=>{
    setPlayers(playerData); 
  },[])
  return (
    <div className="App">
      <Header></Header>
      <MakeTeam></MakeTeam>
      
    </div>
  );
}

export default App;
