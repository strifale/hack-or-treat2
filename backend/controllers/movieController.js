const Movie = require('../models/movieModel')
const mongoose = require('mongoose')

//get all the movies (sorted by the creation date)
const getMovies = async (req, res) => {
    const movies = await Movie.find({}).sort({createdAt: -1}) //SORTING
    res.status(200).json(movies)
}

//get a single movie
const getMovie = async (req, res) => {
    const {id} = req.params
    if  (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such movie"})
    }
    const movie = await Movie.findById(id)

    if (!movie) {
        return res.status(404).json({error: "no such movie"})
    }

    res.status(200).json(movie)
}

//create a new movie entry
const createMovie = async (req, res) => {
    const {title, releaseDate, subtitles, narration, fearScale} = req.body

    //add document to the db
    try {
        const movie = await Movie.create({title, releaseDate, subtitles, narration, fearScale})
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a movie
const deleteMovie = async (req, res) => {
    const {id} = req.params
    if  (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such movie"})
    }

    const movie = await Movie.findByIdAndDelete(id) //st: finding by id and deleting (another viable method is findOneAndDelete)

    if (!movie) {
        return res.status(404).json({error: "no such movie"})
    }
    res.status(200).json(movie)
}

//update a movie
const updateMovie = async (req, res) => {
    const {id} = req.params
    if  (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such movie"})
    }

    const movie = await Movie.findOneAndUpdate(
        {_id: id}, 
        {...req.body}
        ) 

    if (!movie) {
        return res.status(404).json({error: "no such movie"})
    }
    res.status(200).json(movie)

}


module.exports = {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}
