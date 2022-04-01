const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    name: { type: String, required: false },
    type: { type: String, required: false },
    ingredients: { type: String, required: false },
    servings: { type: String, required: false },
    time_cook: { type: String, required: false },
    temp: { type: String, required: false },
    caution: { type: String, required: false },
    steps: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Recipe