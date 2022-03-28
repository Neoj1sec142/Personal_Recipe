const db = require('../db')
const { Recipe, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rec1 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec1.save()

  const rec2 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec2.save()

  const rec3 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec3.save()

  const rec4 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec4.save()

  const rec5 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec5.save()

  const rec6 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec6.save()

  const rec7 = await new Recipe({
    name: "",
    ingredients: "",
    servings: "",
    time_cook: "",
    temp: "",
    caution: "",
    steps: ""
  })
  rec7.save()

  const comments = [
    {
        rating: "",
        comment: "",
        recipe: rec1._id
    },
    {
        rating: "",
        comment: "",
        recipe: rec2._id
    },
    {
        rating: "",
        comment: "",
        recipe: rec3._id
    },
    {
        rating: "",
        comment: "",
        recipe: rec4._id
    },
    {
        rating: "",
        comment: "",
        recipe: rec5._id
    },
    {
        rating: "",
        comment: "",
        recipe: rec6._id
    },
    {
        rating: "",
        comment: "",
        recipe: rec7._id
    }
  ]

  await Comment.insertMany(comments)
  console.log('Created comments!')
}

const run = async () => {
  await main()
  db.close()
}

run()