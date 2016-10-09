export function addRecipe(newRecipeFromForm) {
  const newRecipeFromApi = fetch('http://localhost:3000/api/v1/recipes', {
    method: 'POST',
    headers: {
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

export function fetchMenus(){
 const menus = fetch('http://localhost:3000/api/v1/menus').then(response => {
   return response.json()
 }).then(menusPayload => {
   console.log("ajax for menus", menusPayload);
   return menusPayload
 })

 return {
   type: 'FETCH_MENUS',
   payload: menus
 }

}

export function fetchRecipes(){

 const recipes = fetch('http://localhost:3000/api/v1/recipes').then(response => {
   return response.json()
 }).then(recipesPayload => {
   return recipesPayload
 })

 return {
   type: 'FETCH_RECIPES',
   payload: recipes
 }

}

export function fetchIngredients(){

 const ingredients = fetch('http://localhost:3000/api/v1/ingredients').then(response => {
   return response.json()
 }).then(ingredientsPayload => {
   return ingredientsPayload
 })

 return {
   type: 'FETCH_INGREDIENTS',
   payload: ingredients
 }

}

export function fetchUsers(){

 const users = fetch('http://localhost:3000/api/v1/users').then(response => {
   return response.json()
 }).then(usersPayload => {
   return usersPayload
 })

 return {
   type: 'FETCH_USERS',
   payload: users
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

export function updateMenu(menu){
  const updateApiMenu = fetch(`http://localhost:3000/api/v1/menus/${menu.id}`,{
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({menu: menu})
  }).then(response => {
    return response.json()
  }).then(updateMenuPlayload => {
    return updateMenuPlayload
  })
  return {type: 'UPDATE_MENU', payload: updateApiMenu}
}

export function updateRecipe(recipe){
  const updateApiRecipe = fetch(`http://localhost:3000/api/v1/recipes/${recipe.id}`,{
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({recipe: recipe})
  }).then(response => {
    return response.json()
  }).then(updateRecipePlayload => {
    return updateRecipePlayload
  })
  return {type: 'UPDATE_RECIPE', payload: updateApiRecipe}
}
