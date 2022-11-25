import React from 'react';
import { useDispatch } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import { login } from './features/userSlice';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user] = useAuthState(auth)
  const dispatch = useDispatch()
  const currentUser = auth.currentUser
  if (currentUser) {
    dispatch(login({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid
    }))
  }
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
  // return(
  //   user===null?<Login/>:(
  //     <Router>
  //     <>
  //       <Switch>
  //         <Route path="/" element={<General/>}/>
  //         <Route path="findr" element={<Findr/>}/>
  //       </Switch>
  //       </>
  //   </Router>
  //   )
  // )
}

export default App;
