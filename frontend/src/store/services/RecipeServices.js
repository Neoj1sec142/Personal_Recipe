import Client from "./api";
// Recipe Services
export const GetRecipes = async () => {
    try{
        const res = await Client.get('recipe/')
        console.log(res, "recipe RES")
        return res
    }catch(err){console.log(err)}
}

export const GetRecipeById = async (id) => {
    try{
        const res = await Client.get(`recipe/${id}/`)
        return res
    }catch(err){console.log(err)}
}


export const CreateRecipe = async (recipe) => {
    console.log(recipe, "BEfore TRY")
    try {
        const data = {
            title: recipe.title,
            description: recipe.description,
            oven_preheat: recipe.oven_preheat,
            meal_type: recipe.meal_type,
            time_cook: recipe.time_cook,
            serves: recipe.serves
        }
        console.log(data, "Before axios")
        const res = await Client.post(`recipe/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveRecipe = async (id) => {
    try{
        const res = await Client.delete(`recipe/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdateRecipe = async (id, details) => {
    try {
        const res = await Client.put(`recipe/${id}/`, details)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}