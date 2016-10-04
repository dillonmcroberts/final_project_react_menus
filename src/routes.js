import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import MenusIndex from './components/menus/MenusIndex'
import MenuCreate from './components/menus/MenuCreate'
import MenuShow from './components/menus/MenuShow'


export default(
  <Route path='/' component={App}>
    <Route path='/menus' component={MenusIndex}>
      <Route path='/menus/new' component={MenuCreate} />
      <Route path='/menus/:id' component={MenuShow} />
    </Route>
  </Route>
)
