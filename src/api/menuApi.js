class MenuApi{
  static requestHeaders(){
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllMenus(){
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/menus')
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }
}
