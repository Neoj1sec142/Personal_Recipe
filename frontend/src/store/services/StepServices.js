import Client from "./api";
// Step Services
export const GetSteps = async (recipe_id) => {
    try{
        const res = await Client.get(`${recipe_id}/steps/`)
        console.log(res, "step RES")
        return res
    }catch(err){console.log(err)}
}

export const GetStepById = async (id) => {
    try{
        const res = await Client.get(`steps/${id}/`)
        return res
    }catch(err){console.log(err)}
}


export const AddStep = async (recipe_id, step) => {
    console.log(step, "BEfore TRY")
    try {
        const data = {
            recipe: recipe_id,
            label: step.label,
            description: step.description
        }
        console.log(data, "Before axios")
        const res = await Client.post(`${recipe_id}/steps/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveStep = async (id) => {
    try{
        const res = await Client.delete(`steps/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdateStep = async (id, step) => {
    try {
        const res = await Client.put(`steps/${id}/`, step)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}