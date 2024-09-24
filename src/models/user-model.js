import conn from '../conn.js';
import bcrypt from 'bcrypt';

const Schema = conn.Schema;

const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    tipo: {
        type: String,
        enum: ["ADM", "USUARIO"],
        default: "USUARIO",
        required: true,
    }
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = conn.model("User", userSchema);

export default User;