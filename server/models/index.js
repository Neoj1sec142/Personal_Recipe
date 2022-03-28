const mongoose = require('mongoose')
const RecipeSchema = require('./recipes')
const CommentSchema = require('./comments')

const Recipe = mongoose.model('recipes', RecipeSchema)
const Comment = mongoose.model('comments', CommentSchema)

module.exports = {
  Recipe,
  Comment
}