const mongoose = require('mongoose')
const RecipeSchema = require('./recipes')
const CommentSchema = require('./comments')

const Recipe = mongoose.model('products', RecipeSchema)
const Comment = mongoose.model('brands', CommentSchema)

module.exports = {
  Recipe,
  Comment
}