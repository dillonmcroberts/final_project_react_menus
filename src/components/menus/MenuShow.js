import React from 'react';
import {connect} from 'react-redux';
import MenuEdit from './MenuEdit'
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'


class MenuShow extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state ={
      isEditing: false,
      menu: this.props.cat,
      menuRecipes: this.props.menuRecipes,
      checkBoxRecipes: this.props.checkBoxRecipes
    };
    this.appetizers = this.appetizers.bind(this)
    this.mains = this.mains.bind(this)
    this.dessert = this.dessert.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateMenuState = this.updateMenuState.bind(this)
    this.updateMenuRecipes = this.updateMenuRecipes.bind(this);
    this.saveMenu = this.saveMenu.bind(this)
  }

  updateMenuState(event) {
    const field = event.target.name;
    const menu = this.state.cat;
    menu[field] = event.target.value;
    return this.setState({menu:menu})
  }

  updateMenuRecipes(event) {
      const menu = this.state.menu;
      const recipeId = event.target.value;
      const recipe = this.state.checkBoxHobbies.filter(recipe => recipe.id  == recipeId)[0];
      const checked = !recipe.checked;
      recipe['checked'] = !recipe.checked;
      if (checked) {
        menu.recipe_ids.push(recipe.id);
      } else {
        menu.recipe_ids.splice(menu.recipe_ids.indexOf(recipe.id));
      }
      this.setState({menu: menu});

    }
  componentWillReceiveProps(nextProps) {
  if (this.props.menu.id != nextProps.menu.id) {
    this.setState({menu: nextProps.menu});
  }
  if (this.props.checkBoxRecipes.length < nextProps.checkBoxRecipes.length) {
    this.setState({menuRecipes: nextProps.menuRecipes, checkBoxRecipes: nextProps.checkBoxRecipes});
  }
}

  toggleEdit(){
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  saveMenu(event) {
    event.preventDefault();
    this.props.actions.updateMenu(this.state.menu);
  }

appetizers(){
  return this.props.menu.recipes.filter(recipe => recipe.course == 'appetizer').map(recipe => <li>{recipe.name}</li>)
}
mains(){
   return this.props.menu.recipes.filter(recipe => recipe.course == 'main').map(recipe => <li>{recipe.name}</li>)
  }
dessert(){
     return this.props.menu.recipes.filter(recipe => recipe.course == 'dessert').map(recipe => <li>{recipe.name}</li>)
  }

render(){
  if (this.state.isEditing) {
    return(
      <div>
        <h1>Edit Menu</h1>
          <MenuEdit
            menu={this.state.menu}
            recipes={this.state.checkBoxRecipes}
            onSave={this.saveMenu}
            onChange={this.updateMenuState}
            onRecipeChange={this.updateMenuRecipes}/>
      </div>
    )
  }
    return(



      <div className='center text-center'>
        <div className='left-padding'>
        <h2>{this.props.menu.name}</h2>
          <h5 className='uppercase'> {this.props.menu.occasion} </h5>
          <h6 className='uppercase'> {this.props.menu.description}</h6>
        <h4>Appetizers</h4>
          <ul>
            {this.appetizers()}
          </ul>
        <h4>Mains</h4>
          <ul>
            {this.mains()}
          </ul>
        <h4>Desserts</h4>
          <ul>
            {this.dessert()}
        </ul>
      </div>
      <button className='btn' onClick={this.toggleEdit.bind(this)}>Edit this Menu</button>
    </div>
      )
  }
}
function recipesForMenus(recipes,menu=null) {
  return recipes.map( recipe => {
    if (menu && menu.recipes.filter(recipeId => recipeId.id == recipe.id).length > 0) {
    recipe['checked'] = true;
  } else {
    recipe['checked'] = false;
}
  return recipe;
});

}
function collectMenuRecipes(recipes, menu) {
  let selected = recipes.map(recipe => {
    if (menu.recipes.filter(recipeId => recipeId.id == recipe.id).length > 0) {
      return recipe;
    }
  })
  return selected.filter(r => r != undefined)
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
function mapStateToProps(state, ownProps){
  console.log(state);
  const stateRecipes = Object.assign([],state.recipes)
  let checkBoxRecipes =[];
  let menuRecipes = [];
  let menu = {menu: [{name: '', occasion: '', description: '', recipes: [{name: ''}]}]}
  if (ownProps.params.id && state.menus.length > 0 && state.recipes.length > 0){
     menu = state.menus.find((menu) => {
      return menu.id == ownProps.params.id
    });
    if (menu.recipes.length > 0) {
      checkBoxRecipes = recipesForMenus(stateRecipes,menu);
      menuRecipes = collectMenuRecipes(stateRecipes,menu);
      } else {
        checkBoxRecipes = recipesForMenus(stateRecipes)
      }
    }
      return {
        menu: menu,
        checkBoxRecipes: checkBoxRecipes,
        menuRecipes:menuRecipes
      };
}





const componentCreator = connect(mapStateToProps,mapDispatchToProps)
export default componentCreator(MenuShow);
