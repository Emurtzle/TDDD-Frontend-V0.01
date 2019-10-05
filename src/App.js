import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import './App.css';

import HomePage from './components/homePage/homePage'
import ClientPage from './components/clientPage/clientPage'
import DueDatesPage from './components/dueDatesPage/dueDatesPage'
import Navbar from './components/navBar'

function App() {
  return (
    <Router>
      <div>
        <Route path='/' render={ () => <Navbar /> } />
        <Route path='/clients' render={ () => <ClientPage /> } />
        <Route path='/home' render={ () => <HomePage /> } />
        <Route path='/duedates' render={ () => <DueDatesPage /> } />
      </div>
    </Router>
  );
}

export default App;
