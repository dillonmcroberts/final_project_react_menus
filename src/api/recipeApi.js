export default class RecipeApi{
  static requestHeaders(){
    if (sessionStorage.jwt){
      return {'AUTHORIZATION':`Bearer${sessionStorage.jwt}`}
    }
  }

  static getAllRecipes(){
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/recipes', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}
