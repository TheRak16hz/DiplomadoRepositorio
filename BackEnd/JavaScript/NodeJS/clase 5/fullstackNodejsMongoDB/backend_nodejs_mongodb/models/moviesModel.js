const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director : { type: String, required: true },
    year: { type: Number, required: true }
});

//omitir el campo __V de la salida Json

movieSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Movie', movieSchema);