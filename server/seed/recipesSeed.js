const db = require('../db')
const { Recipe, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rec1 = await new Recipe({
    name: "Chicken a la King",
    ingredients: "1/4 cup butter, 1/3 cup all-purpose flour, 1/2 teaspoon salt, 2 cups chicken broth, 2 cups diced cooked chicken 1 bag of frozen peas, 2oz diced pimentos, honey butter biscuts",
    servings: "6",
    time_cook: "45 min",
    temp: "low heat",
    caution: "n/a",
    steps: "In a saucepan, ,elt butter; stir in flour and salt until smooth. Add the broth and milk; bring to a boil over medium head. Cook and stir for two minutes or until thickened. Stir in chicken, peas, and pimentos; Serve over buscuits with dash of salt and pepper."
  })
  rec1.save()

  const rec2 = await new Recipe({
    name: "Jonny Walker Old Fashioned",
    ingredients: "2sts Jonny Red Label, 1sts of Old Fashion Mix, 1/2&1/2sts of cherry juice-orange juice, orange peel, a cherry on top.",
    servings: "1",
    time_cook: "5 min",
    temp: "served on distilled ice ball",
    caution: "alcohol content",
    steps: "Add Johnny, mix, juices and orange peel; Stir; Drop in Ice Cube and add cherry."
  })
  rec2.save()

  const rec3 = await new Recipe({
    name: "Avocado Egg Toast",
    ingredients: "2 Pieces Sourdough bread, 1 avocado, 2 eggs, tomato, parmesain romano cheese, cholula, crushed red peppers, salt & pepper",
    servings: "2",
    time_cook: "15 min",
    temp: "n/a",
    caution: "Spicey if to much CRP",
    steps: "Toast Sourdough bread; fry an egg easy over; spread 1/2 avocado on peice of Toast, add cheese > cholula > thin slices of tomato > then egg on top, add crushed red pepper and salt and pepper to taste preference."
  })
  rec3.save()

//   const rec4 = await new Recipe({
//     name: "",
//     ingredients: "",
//     servings: "",
//     time_cook: "",
//     temp: "",
//     caution: "",
//     steps: ""
//   })
//   rec4.save()

//   const rec5 = await new Recipe({
//     name: "",
//     ingredients: "",
//     servings: "",
//     time_cook: "",
//     temp: "",
//     caution: "",
//     steps: ""
//   })
//   rec5.save()

//   const rec6 = await new Recipe({
//     name: "",
//     ingredients: "",
//     servings: "",
//     time_cook: "",
//     temp: "",
//     caution: "",
//     steps: ""
//   })
//   rec6.save()

//   const rec7 = await new Recipe({
//     name: "",
//     ingredients: "",
//     servings: "",
//     time_cook: "",
//     temp: "",
//     caution: "",
//     steps: ""
//   })
//   rec7.save()

console.log('Recipes Seeded to DB')
}

const run = async () => {
  await main()
  db.close()
}

run()