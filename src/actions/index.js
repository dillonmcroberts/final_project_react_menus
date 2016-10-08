import * as types from './ActionTypes';
import sessionApi from '../api/sessionApi'
import MenuApi from '../api/menuApi'
import RecipeApi from '../api/recipeApi'
import IngredientApi from '../api/ingredientApi'
import UserApi from '../api/userApi'


// recipes actions

export function fetchRecipes(){

const recipes = RecipeApi.getAllRecipes();

 return {
   type: 'FETCH_RECIPES',
   payload: recipes
 }
}

export function addRecipe(newRecipeFromForm) {
  const newRecipeFromApi = fetch('http://localhost:3000/api/v1/recipes', {
    method: 'POST',
    headers: {
      'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({recipe: newRecipeFromForm})

  }).then(response=> {
    return response.json()
  }).then(newRecipePayload => {
    return newRecipePayload
  })

  return {type: 'ADD_RECIPE', payload: newRecipeFromApi}
}

//menus actions

export function fetchMenus(){
 const menus = MenuApi.getAllMenus();

 return {
   type: 'FETCH_MENUS',
   payload: menus
 }
}

export function addMenu(newMenuFromForm) {
  const newMenuFromApi = fetch('http://localhost:3000/api/v1/menus', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({menu: newMenuFromForm})

  }).then(response=> {
    return response.json()
  }).then(newMenuPayload => {
    return newMenuPayload
  })

  return {type: 'ADD_MENU', payload: newMenuFromApi}
}

//ingredients actions

export function fetchIngredients(){

const ingredients = IngredientApi.getAllIngredients();

 return {
   type: 'FETCH_INGREDIENTS',
   payload: ingredients
 }
}

export function addIngredient(newIngredientFromForm) {
  const newIngredientFromApi = fetch('http://localhost:3000/api/v1/ingredients', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ingredient: newIngredientFromForm})

  }).then(response=> {
    return response.json()
  }).then(newIngredientPayload => {
    return newIngredientPayload
  })

  return {type: 'ADD_INGREDIENT', payload: newIngredientFromApi}
}

//users actions

export function fetchUsers(){

 const users = UserApi.getAllUsers();

 return {
   type: 'FETCH_USERS',
   payload: users
 }
}

export function addUser(newUserFromForm) {
  const newUserFromApi = fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: newUserFromForm})

  }).then(response=> {
    return response.json()
  }).then(newUserPayload => {
    return newUserPayload
  })

  return {type: 'ADD_USER', payload: newUserFromApi}

}

//login and logout actions

export function loginSuccess(){
  return{type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  const jwtToken = fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(response => {
    return response.json()
  }).then(jwtPayload => {
    return jwtPayload
  })
  return {type: 'LOG_IN_SUCCESS', payload: jwtToken}
}

export function logOutUser(){
  debugger;
  sessionStorage.removeItem('jwt');

  return {type: 'LOG_OUT'}
}
