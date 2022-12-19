import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {load_recipes} from '../store/actions/recipe'

const Main = ({load_recipes, recipes}) => {
    useEffect(() => {
        load_recipes()
    },[])
    

    return(
        <div className='d-flex justify-content-center mt-3'>
            <div className='card mt-2 mb-1 w-75 p-3'>
                <div className='card text-center'>
                    <h3 className='card-header'>Recipies in this Kitchen: {recipes.length}    
                        <a href="new-recipe" className="btn btn-success m-2">New Recipe</a>
                    </h3>
                    {recipes.length ? recipes.map((item, index) => (
                    <div key={index}>
                        <a href={`/recipe/${item.id}`} className="btn btn-primary m-2">{item.title}</a>
                    </div>)):null}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes
})

export default connect(mapStateToProps, {load_recipes})(Main)