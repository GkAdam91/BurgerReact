import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIncredient';

const burger=(props)=> {
    let ingredientList = Object.keys(props.ingredients)
        .map(igKey=>{
            return[...Array(props.ingredients[igKey])].map((_, i)=>{
                return <BurgerIngredient key = {igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el)
        }, []);
    if(ingredientList.length === 0){
        ingredientList = <p>Please start adding ingredients</p>
    }
    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientList}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;