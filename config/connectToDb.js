// Import dependencies
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
connectToDb().catch(err => console.log(err));

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to database")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDb;