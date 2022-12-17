import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Layout from './styles/Layout'
import Main from './containers/Main'
import './styles/App.css';
import NewRecipe from './containers/NewRecipe';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/new-recipe' element={<NewRecipe />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
