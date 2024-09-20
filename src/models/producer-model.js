import db from '../conn.js';
const Schema = db.Schema;

const producerSchema = new Schema({
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

const Producer = db.model("Producer", producerSchema);

export default Producer;