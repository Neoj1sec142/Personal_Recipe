const db = require('../db')
const { Recipe } = require('../models/')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = [


{ 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  },
  { 
    name: "",
    type: '',
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  }
]
  await Recipe.insertMany(recipes)
    console.log("Created some recipes!")
}
const run = async () => {
    await main()
    db.close()
}

//run()