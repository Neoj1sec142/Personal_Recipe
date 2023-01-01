import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {load_recipes} from '../store/actions/recipe'

const Navbar = ({load_recipes, recipes}) => {
    useEffect(() => { load_recipes() },[])
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const onChange = e => setSearch(e)
    useEffect(() => {
        if(search !== ''){
            recipes.forEach((item) => {
                if(item.title.toLowerCase().includes(search.toLowerCase())){
                    setResults({...results, item})
                }
            })
            
        }else{
            setResults([])
            let bar = document.getElementById('results')
            if(bar){
                bar.classList.add('disabled')
            }
            
        }
    },[search])
    const onSubmit = e => {
        e.preventDefault()
        if(results.length > 0){
            let bar = document.getElementById('results')
            if(bar){
                bar.classList.remove('disabled')
            }
        }else{
            alert('There is no recipe with that title please try again.')
        }
    }
    
    if(recipes){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">Recipe Book</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="new-recipe">New Recipe</a>
                        </li>
                        <li className="nav-item dropdown disabled" id="results">
                            
                            <ul className="dropdown-menu" aria-labelledby="result">
                                {results.length > 0 ? results.map((res) => (
                                <li><a className="dropdown-item" href={`/recipe/${res.id}`}>{res.title}</a></li>)):null}
                            </ul>
                        </li>
                        {/*<li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                        </ul>
                        <form className="d-flex" onSubmit={e=>onSubmit(e)}>
                        <input onChange={e=>onChange(e)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }else{
        return(<div>Loading.....</div>)
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes
})

export default connect(mapStateToProps, {load_recipes})(Navbar);