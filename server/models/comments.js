const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    rating: { type: String, required: true },
    comment: { type: String, required: true },
    recipe: { type: Schema.Types.ObjectId, ref: 'recipes' }
  },
  { timestamps: true }
)

module.exports = Comment