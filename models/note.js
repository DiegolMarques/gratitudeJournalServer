const mongoose = require('mongoose');

// Set our database up
const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const Note = mongoose.model("Note", noteSchema)

module.exports = Note;