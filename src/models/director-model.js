import db from '../conn.js';
const Schema = db.Schema;

const directorSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true,
    },
    cep: {
        type: Schema.Types.Number,
        required: true,
        // min: 8,
        // max: 8
    },
    telefones: [{
        type: Schema.Types.String,
    }]
});

const Director = db.model("Director", directorSchema);

export default Director;