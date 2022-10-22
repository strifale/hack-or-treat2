const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    subtitles: {
        type: Boolean,
        required: true
    },
    narration: {
        type: Boolean,
        required: true
    },
    fearScale: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('movie', movieSchema)