const express = require('express')

const router = express.Router()
const {
    createMovie,
    getMovie,
    getMovies,
    deleteMovie,
    updateMovie
} = require('../controllers/movieController')

//GET All movies for a particular user
router.get('/', getMovies)

//GET a single movie
router.get('/:id', getMovie)

//POST a new movie 
router.post('/', createMovie)

//Delete a new movie 
router.delete('/:id', deleteMovie)

//Update a new movie 
router.patch('/:id', updateMovie)

module.exports = router;