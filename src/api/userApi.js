export default class UserApi{
  static requestHeaders(){
    if (sessionStorage.jwt){
      return {'AUTHORIZATION':`Bearer${sessionStorage.jwt}`}
    }
  }

  static getAllUsers(){
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/users', {
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
