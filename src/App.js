import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';
 
 




function App() {
  const [{user}] = useStateValue();
  return (
    <div className="app">
     
        {!user ? (
          <Login/>
        ):(
          <div className="app_body">
            <Router>
              <Sidebar/>
              <Routes>
                 
                 <Route path="/rooms/:roomId" element={<Chat/>} />
                  
                
                 <Route path="/" element={<Chat/>} />
                             
              </Routes>            
            </Router>
          </div>
        )}
        
    </div>
  );
}

export default App;
