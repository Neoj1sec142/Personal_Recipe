const { Recipe, Comment } = require("../models")

const addComment = async (req, res) => {
    try {
        
        const comment = await new Comment(req.body)
        await comment.save()
        const Recipe = await Recipe.findByID(id)
        return res.status(201).json({
            comment
        })
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
        });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        } 
}

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({})
        return res.status(200).json({ recipes })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeById = async (req, res) => {
    try {
        const {id} = req.params;
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.status(200).json({ recipe });
        }
        return res.status(404).send('Recipe with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const searchRecipeName = async (req, res) => {
    try {
        const {name} = req.params;
        const recipe = await Recipe.name
        if (recipe) {
            return res.status(200).json({ recipe });
        } else {
        return res.status(404).send('Recipe with the specified ID does not exists');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    addComment,
    getAllRecipes,
    getRecipeById,
    createRecipe,
    searchRecipeName
}