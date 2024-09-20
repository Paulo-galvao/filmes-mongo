import mongoose from 'mongoose';
const mongodb = process.env.MONGODB;

async function main() {
    try {
        await mongoose.connect(mongodb);
        console.log("Connected successfully");
    } catch (error) {
        console.log(error);
        console.log("error")
    }
}

main();

export default mongoose;