const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    servings: { type: String, required: true },
    time_cook: { type: String, required: true },
    temp: { type: String, required: false },
    caution: { type: String, required: true },
    steps: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Recipe