export function fetchMenus(){
 const menus = fetch('http://localhost:3000/api/v1/menus').then(response => {
   return response.json()
 }).then(menusPayload => {
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
