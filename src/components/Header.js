import React from 'react';
import { Navbar } from 'react-bootstrap';
import { isNil } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { leaveRoom } from '../lib/endpoints';
import './Header.css';

export default function Header({
  auth = {},
  clearAuth,
  sound = null,
  setSound,
}) {
  const navigate = useNavigate();

  // leave current game
  async function leave() {
    try {
      await leaveRoom(auth.roomID, auth.playerID, auth.credentials);
      clearAuth();
      navigate('/');
    } catch (error) {
      console.log('leave error', error);
      clearAuth();
      navigate('/');
    }
  }

  return (
    <header className="header">
      <Navbar>
        <Navbar.Brand>
          <div className="nav-title">
            <img src="/bruzzerslogo.png" className="buzz-logo" alt="logo" />
          </div>
        </Navbar.Brand>
        <div className="nav-buttons">
          {!isNil(sound) ? (
            <button className="text-button" onClick={() => setSound()}>
              {sound ? 'Turn off sound' : 'Turn on sound'}
            </button>
          ) : null}
          {clearAuth ? (
            <button className="text-button" onClick={() => leave()}>
              Leave game
            </button>
          ) : null}
        </div>
      </Navbar>
    </header>
  );
}
