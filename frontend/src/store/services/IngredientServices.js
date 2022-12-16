import Client from "./api";
// Ingredient Post Services
export const GetIngredients = async (recipe_id) => {
    try{
        const res = await Client.get(`${recipe_id}/ingredients/`)
        console.log(res, "BLOG RES")
        return res
    }catch(err){console.log(err)}
}

export const GetIngredientById = async (id) => {
    try{
        const res = await Client.get(`ingredients/${id}/`)
        return res
    }catch(err){console.log(err)}
}



export const AddIngredient = async (recipe_id, ingredient) => {
    console.log(ingredient, "BEfore TRY")
    try {
        const data = {
            recipe: recipe_id,
            name: ingredient.name,
            description: ingredient.description,
            amount: ingredient.amount,
            
        }
        console.log(data, "Before axios")
        const res = await Client.post(`${recipe_id}/ingredients/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveIngredient = async (id) => {
    try{
        const res = await Client.delete(`ingredients/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdateIngredient = async (id, details) => {
    try {
        const res = await Client.put(`ingredients/${id}/`, details)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}