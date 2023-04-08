import React, { useEffect } from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import IntroductionPage from './IndroductionPage/IntroductionPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';
import { connectWithSocketIOServer } from './utils/wss';
import './App.css';

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/join-room' element ={< JoinRoomPage/>}/>
        <Route path='/room' element ={< RoomPage/>}/>
        <Route path='/' element ={< IntroductionPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
