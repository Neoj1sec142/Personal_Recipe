import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Layout from './styles/Layout'
import Main from './containers/Main'
import NewRecipe from './containers/NewRecipe';
import AddIngredients from './containers/AddIngredients';
import AddSteps from './containers/AddSteps';
import './styles/App.css';
import RecipeDetail from './containers/RecipeDetail';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/new-recipe' element={<NewRecipe />} />
          <Route path='/add-ingredients/:id' element={<AddIngredients />} />
          <Route path='/add-steps/:id' element={<AddSteps />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
