export default class MenuApi{
  static requestHeaders(){
    if (sessionStorage.jwt){
      return {'AUTHORIZATION':`Bearer${sessionStorage.jwt}`}
    }
  }

  static getAllMenus(){
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/menus', {
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
