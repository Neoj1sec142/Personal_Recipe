import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Layout from './styles/Layout'
import Main from './containers/Main'
import NewRecipe from './containers/NewRecipe';
import AddIngredients from './containers/AddIngredients';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/new-recipe' element={<NewRecipe />} />
          <Route path='/add-ingredients/:id' element={<AddIngredients />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
