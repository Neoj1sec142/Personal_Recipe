const { Recipe, Comment } = require('./models')
const express = require('express')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')
const cors = require('cors')
const { Router } = require('express');
const controllers = require('./controllers/index')
const router = Router();


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('This is root home server page!')
})

app.get('/recipes', async (req, res) => {
    const recipes = await Recipe.find()
    res.json(recipes)
  })
  app.get('/recipes/:id', async (req, res) => {
    try {
      const { id } = req.params
      const recipe = await Recipe.findById(id)
      if (!recipe) throw Error('Recipe not found.')
      res.json(recipe)
    } catch (e) {
      console.log(e)
      res.send('Recipe not found!!!')
    }
})
app.put('/recipes/update/:name', (req,res) => {
  res.send(`Recipe profile with the name of ${req.params.name} was updated`)
})
app.post("/recipes",function(req,res){   
       
  let rec = new Recipe(req.body);  
      rec.save(function(err,data){  
          if(err){  
              res.send(err);                
          }  
          else{        
               res.send({data:"Recipe has been Inserted..!!"});  
          }  
      });  
})  

//app.post('/recipes', controllers.createRecipe)
app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))