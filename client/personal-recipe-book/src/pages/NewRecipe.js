//import { useNavigate } from 'react-router-dom'

const NewRecipe = () => {
    // const navigate = useNavigate();
    // const showRecipe = () => {
    //     navigate(recipeResults.data._id)
    // }
    // u2w1ThurLessConRendering for info
    const handleChange = () => {}
    return(
        <div className='new'>
            <form>
                <input name='new_name' value='name' placeholder='name' onChange={handleChange} />
                <input name='new_type' value='type' placeholder='name' />
                <input name='new_ingredients' value='ingredients' placeholder='ingredients' />
                <input name='new_servings' value='servings' placeholder='servings' />
                <input name='new_time_cook' value='time_cook' placeholder='time_cook' />
                <input name='new_temp' value='temp' placeholder='temp' />
                <input name='new_caution' value='caution' placeholder='caution' />
                <input name='new_steps' value='steps' placeholder='steps' />
                
            </form>
        </div>
    )
}

export default NewRecipe

    // name: "",
    // type: '',
    // ingredients: "",
    // servings: "",
    // time_cook: "",
    // temp: "",
    // caution: "",
    // steps: ""