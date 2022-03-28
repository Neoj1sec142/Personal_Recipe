const db = require('../db')
const { Recipe } = require('../models/')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = [
      { 
        name: "Chicken a la King",
        type: 'Dinner Meals',
        ingredients: "1/4 cup butter, 1/3 cup all-purpose flour, 1/2 teaspoon salt, 2 cups chicken broth, 2 cups diced cooked chicken 1 bag of frozen peas, 2oz diced pimentos, honey butter biscuts",
        servings: "6",
        time_cook: "45 min",
        temp: "low heat",
        caution: "n/a",
        steps: "In a saucepan, ,elt butter; stir in flour and salt until smooth. Add the broth and milk; bring to a boil over medium head. Cook and stir for two minutes or until thickened. Stir in chicken, peas, and pimentos; Serve over buscuits with dash of salt and pepper."
      },
      { 
        name: "Jonny Walker Old Fashioned",
        type: 'Drinks',
        ingredients: "2sts Jonny Red Label, 1sts of Old Fashion Mix, 1/2&1/2sts of cherry juice-orange juice, orange peel, a cherry on top.",
        servings: "1",
        time_cook: "5 min",
        temp: "served on distilled ice ball",
        caution: "alcohol content",
        steps: "Add Johnny, mix, juices and orange peel; Stir; Drop in Ice Cube and add cherry."
      },
      { 
        name: "Avocado Egg Toast",
        type: 'Breakfast',
        ingredients: "2 Pieces Sourdough bread, 1 avocado, 2 eggs, tomato, parmesain romano cheese, cholula, crushed red peppers, salt & pepper",
        servings: "2",
        time_cook: "15 min",
        temp: "n/a",
        caution: "Spicey if to much CRP",
        steps: "Toast Sourdough bread; fry an egg easy over; spread 1/2 avocado on peice of Toast, add cheese > cholula > thin slices of tomato > then egg on top, add crushed red pepper and salt and pepper to taste preference."
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









//   const rec4 = await new Recipe({
    // name: "",
    // type: '',
    // ingredients: "",
    // servings: "",
    // time_cook: "",
    // temp: "",
    // caution: "",
    // steps: ""
//   })
//   rec4.save()

