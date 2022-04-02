const { Recipe, Comment } = require("../models")

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({})
        return res.status(200).json({ comments })
    } catch (error) {
        return res.status(500).send(error.message);
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

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

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

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.findByIdAndUpdate(id, req.body,  (err, comment) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!comment) {
                res.status(500).send('Comment not found!');
            }else {
            return res.status(200).json(comment);
            }
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    addComment,
    getAllRecipes,
    getRecipeById,
    createRecipe,
    searchRecipeName,
    deleteComment,
    updateComment,
    deleteRecipe,
    getAllComments
}