var express = require('express')
var filmRouter = new express.Router()

var Films = require('../client/src/models/films.js')
var Film = require('../client/src/models/film.js')
var Review = require('../client/src/models/review.js')
var films = new Films()

//INDEX
filmRouter.get('/', function(req, res){
  res.json(films)
})

//SHOW
filmRouter.get('/:id', function(req, res){
  res.json({ data: films[req.params.id] })
})

//CREATE
filmRouter.post('/', function(req, res){

  var review = new Review({
    comment: req.body.comment,
    rating: parseInt(req.body.rating),
    author: req.body.author
  });

  var filmInfo = {
    title: req.body.title,
    actors: [req.body.actors],
    reviews: [review]
  }

  var film = new Film(filmInfo)
  films.push(film)
  res.json(films)
})

//UPDATE
filmRouter.put('/:id', function(req, res){
  var film = films[req.params.id]
  if (req.body.title){
    film.title = req.body.title 
  }
  if (req.body.actors){
    film.actors = [req.body.actors] 
  }
  
  res.json(films)
})

//DELETE

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1)
  res.json(films)
})



module.exports = filmRouter