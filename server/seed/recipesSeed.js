const db = require('../db')
const { Recipe } = require('../models/')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // create array of recipe objects
  const recipes = [
      
      { 
        key: 1,
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
        key: 2,
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
        key: 3,
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
        key: 4,
        name: "Custard Toast",
        type: 'Breakfast',
        ingredients: "1 slice of bread, 1 egg, 1 tbspn honey, 2 tbspn yogurt, fresh fruit",
        servings: "1",
        time_cook: "25 min",
        temp: "180",
        caution: "egg",
        steps: "Dent your bread before putting it in the toaster; mix egg, honey, yogurt in bowl; pour on dented toast; bake@180 for 5-10 min; top with fresh fruit." 
      },
      

      
      { 
        key: 5,
        name: "Tropical Bowl",
        type: 'Breakfast',
        ingredients: "1 banana, 1/2 cup frozen mango, 1/2 cup frozen blueberries, 1/4 cup granola, 1 tspn vanilla, 1 tbspn almond butter, 1/2 almond milk",
        servings: "1",
        time_cook: "10 min",
        temp: "n/a",
        caution: "n/a",
        steps: "Blend the indredients; top with any fresh fruit honey coconut ect."
      },
      

      
      { 
        key: 6,
        name: "Oatmeal Chia Blast",
        type: 'Breakfast',
        ingredients: "1/2 cup oats, 1 tbspn chia seeds, 1/2 mashed banana, 1/2 cup almondmilk, 1/2 tbsn hemp seed, fresh fruit",
        servings: "1",
        time_cook: "15 min",
        temp: "n/a",
        caution: "n/a",
        steps: "add oats, almondmilk to bowl; microwave for 1 min 30 sec; add hemp seeds, chai seeds, banana and stir them in; top with fresh fruit  "
      },
      

      
      { 
        key: 7,
        name: "Smoothie Bowl",
        type: 'Breakfast',
        ingredients: "1 banana, 1 cup frozen spinach, 1 cup kale, 1 cup frozen wild berries, 1/2 cup of oats, 1 tspn flax seed, 1 tspn hemp seed, 1/2 oatmilk",
        servings: "1",
        time_cook: "10 min",
        temp: "n/a",
        caution: "n/a",
        steps: "blend everything and serve in bowl top with fresh fruit if wanted"
      },
      

      
      { 
        key: 8,
        name: "Buddah Bowl",
        type: 'Dinner',
        ingredients: "1 cup chopped spinach, 1 cup chopped kale, 1 avocado, 1/2 cup toamtoes, 1/2 cup green onions, 1 lemon wedge, 1/2 cup quoina, 1/2 chic peas rinsed, dollop of hummus, balsamic dressing",
        servings: "2-3",
        time_cook: "15 min",
        temp: "n/a",
        caution: "n/a",
        steps: "add all ingredints to bowl as salad; sliced avocadoes tomatoes; and top with balsamic dressing and squeeze the lemon wedge over the top"
      },
      

      
      { 
        key: 9,
        name: "Overnight Oats",
        type: 'Breakfast',
        ingredients: "1/2 cup oats, 1/2 cup almond milk, 1/4 dairy free vanilla yogurt, 1 tbspn rinsed chai seeds, 1 tbspn honey, fresh fruit if necessary",
        servings: "1",
        time_cook: "8 hours",
        temp: "fridgerator overnight",
        caution: "n/a",
        steps: "mix up all the ingredients in a bowl except the fresh fruit; and let sit overnight in the fridge; in the morning if you want to add fresh fruit or just enjoy"
      },
      

      
      { 
        key: 10,
        name: "Dad's Egg/Tuna Salad Sammy",
        type: 'Dinner',
        ingredients: "1 can tuna, 1 egg yolk, 1 & 1/2 tbspn mayo, 1 tbson mustard, 1 spear dill pickle diced, 3 tbspn fresh diced onion, salt pepper, 4 pieces of buttered toast ",
        servings: "2",
        time_cook: "15 min",
        temp: "n/a",
        caution: "Cholesterol Warning",
        steps: "mix egg yolk, tuna, mayo, mustard, diced pickle and onion; put on 2 pieces of buttered toast; top with dash of salt and pepper; cover with other buttered toast"
      }
      
    ]
    await Recipe.insertMany(recipes)
    console.log("Created some recipes!")
}
const run = async () => {
    await main()
    db.close()
}

run()





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

