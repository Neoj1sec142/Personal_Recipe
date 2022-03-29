const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root server page!'))

// app.router('/recipies', controllers.addComment)
//
//router.post('/recipes', controllers.addComment)
router.get('/recipes', controllers.getAllRecipes)
router.get('/recipes/:id', controllers.getRecipeById)
router.get('/main?search=:name', controllers.searchRecipeName)
module.exports = router;

//