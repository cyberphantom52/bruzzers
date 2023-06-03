import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Lobby from './containers/Lobby';
import Game from './containers/Game';
import './App.css';

function App() {
  const [auth, setAuth] = useState({
    playerID: null,
    credentials: null,
    roomID: null,
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:id" element={<Game auth={auth} setAuth={setAuth} />} />
          <Route path="/" element={<Lobby setAuth={setAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
