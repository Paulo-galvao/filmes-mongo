import db from '../conn.js';

const Schema = db.Schema;

const movieSchema = new Schema({
    titulo: {
        type: Schema.Types.String,
        required: true
    },
    ano: {
        type: Schema.Types.Number,
        required: true
    },
    genero: {
        type: Schema.Types.String, 
        required: true
    },
    director_id: {
        type: Schema.Types.ObjectId,
        ref: "Director",
    },
    producer_id: {
        type: Schema.Types.ObjectId,
        ref: "Producer",
    }
});

const Movie = db.model("Movie", movieSchema);

export default Movie;