const { Router } = require('express');
const controllers = require('../controllers')
const RecipeSchema = require('../models/recipes')
const router = Router();

router.get('/', (req, res) => res.send('This is root server page!'))

// app.router('/recipies', controllers.addComment)
//

router.get('/recipes', controllers.getAllRecipes)
router.post('/recipes', controllers.createRecipe)
router.delete('/recipes/:id', controllers.deleteRecipe)
router.get('/todo', controllers.getAllComments)
router.post('/todo', controllers.addComment)
router.put('/todo/:id', controllers.updateComment)
router.delete('/todo/:id', controllers.deleteComment)
router.get('/recipes/:id', controllers.getRecipeById)
router.get('/main?search=:name', controllers.searchRecipeName)
router.put("/todo//:id/:comment", controllers.updateComment)
      // .get((req,res) => {
      //   RecipeSchema, controllers.getRecipeById
      // })
      // .put((req,res, next) => {
      //   CommentSchema.findByIdAndUpdate(
      //       req.params.id,
      //       {
      //         $set: req.body,
      //       },
      //       (error, data) => {
      //         if (error) {
      //           return next(error);
      //           console.log(error);
      //         } else {
      //           res.json(data);
      //           console.log("Recipe updated successfully !");
      //         }
      //       }
      //     );
      //   });  
    
module.exports = router;

//