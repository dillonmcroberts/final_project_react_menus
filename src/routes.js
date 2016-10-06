import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'

import MenusIndex from './components/menus/MenusIndex'
import MenuCreate from './components/menus/MenuCreate'
import MenuShow from './components/menus/MenuShow'
import MenuEdit from './components/menus/MenuEdit'


import RecipeIndex from './components/recipes/RecipeIndex'
import RecipeCreate from './components/recipes/RecipeCreate'
import RecipeShow from './components/recipes/RecipeShow'

import IngredientsIndex from './components/ingredients/IngredientsIndex'
import IngredientCreate from './components/ingredients/IngredientCreate'
import IngredientShow from './components/ingredients/IngredientShow'

import UsersIndex from './components/users/UsersIndex'
import UserShow from './components/users/UserShow'
import UserCreate from './components/users/UserCreate'

import FeaturedFoods from './components/FeaturedFoods'




export default(
  <Route path='/' component={App}>
    <IndexRoute component={FeaturedFoods}/>

      <Route path='/recipes' component={RecipeIndex}/>
      <Route path='/recipes/new' component={RecipeCreate}/>
      <Route path='/recipes/:id' component={RecipeShow}/>

      <Route path='/menus' component={MenusIndex}/>
      <Route path='/menus/new' component={MenuCreate} />
      <Route path='/menus/:id' component={MenuShow} />
      <Route path='/menus/edit' component={MenuEdit} />

      <Route path='/ingredients' component={IngredientsIndex}/>
      <Route path='/ingredients/new' component={IngredientCreate} />
      <Route path='/ingredients/:id' component={IngredientShow} />

      <Route path='/users' component={UsersIndex}/>
      <Route path='/users/new' component={UserCreate}/>
      <Route path='/users/:id' component={UserShow}/>
    </Route>

)
