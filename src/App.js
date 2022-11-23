import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import './App.css';

function App() {
  const [user, loading, error] = useAuthState(auth)
  return (
    user === null ? <Login /> : (
      <div className="App">
        <Header />
        <div className="app_body">
          {/* Sidebar*/}
          <Sidebar />
          {/* Main App body */}
          <Feed />
        </div>
      </div>)
  );
}

export default App;
