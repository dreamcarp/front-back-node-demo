const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/carpblog')

 const articleSchema = new mongoose.Schema({
     title: String,
     date: String,
     content: String,
     gist: String,
     labels: Array
 })

 const Models = {
     Article: mongoose.model('Article', articleSchema)
 }

 module.exports = Models