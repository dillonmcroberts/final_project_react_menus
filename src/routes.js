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
import RecipeEdit from './components/recipes/RecipeEdit'


import IngredientsIndex from './components/ingredients/IngredientsIndex'
import IngredientCreate from './components/ingredients/IngredientCreate'
import IngredientShow from './components/ingredients/IngredientShow'

import UsersIndex from './components/users/UsersIndex'
import UserShow from './components/users/UserShow'
import UserCreate from './components/users/UserCreate'

import SessionCreate from './components/sessions/SessionCreate'
import LogOut from './components/sessions/LogOut'

import FeaturedFoods from './components/FeaturedFoods'
import Competition from './components/Competition'


export default(
  <Route path='/' component={App}>

    <IndexRoute component={FeaturedFoods}/>
      <Route path='/recipes' component={RecipeIndex}/>
      <Route path='/recipes/new' component={RecipeCreate} onEnter={requireAuth}/>
      <Route path='/recipes/:id/edit' component={RecipeEdit} onEnter={requireAuth}/>
      <Route path='/recipes/:id' component={RecipeShow} />


      <Route path='/menus' component={MenusIndex}/>
      <Route path='/menus/new' component={MenuCreate} onEnter={requireAuth}/>
      <Route path='/menus/:id' component={MenuShow} />
      <Route path='/menus/:id/edit' component={MenuEdit} onEnter={requireAuth}/>

      <Route path='/ingredients' component={IngredientsIndex}/>
      <Route path='/ingredients/new' component={IngredientCreate} />
      <Route path='/ingredients/:id' component={IngredientShow} />

      <Route path='/users' component={UsersIndex}/>
      <Route path='/users/:id' component={UserShow} />

      <Route path='/signup' component={UserCreate}/>
      <Route path='/login' component={SessionCreate}/>
      <Route path='/logout' component={LogOut}/>
      <Route path='/competition' component={Competition}/>

    </Route>
  )

function requireAuth(nextState, replace){
  if (!sessionStorage.jwt){
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname}
    })
  }
}
