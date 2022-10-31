import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Layout from './styles/Layout'
import Land from './containers/Land'
import Login from './containers/Login'
import Register from './containers/Register'
import Main from './containers/Main'
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Land />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Main/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
