// Import dependencies
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
connectToDb().catch(err => console.log(err));

async function connectToDb() {
    try {
        //await mongoose.connect(process.env.DB_URL);
        await mongoose.connect('mongodb+srv://DiegoMarques:Awesome123*@cluster0.glogkbr.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to database")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDb;