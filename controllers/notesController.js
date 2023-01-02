const Note = require("../models/note");

const fetchNotes = async (req, res) => {
    try {
    // find the notes
    const notes = await Note.find({user: req.user._id});

    // respond with them
    res.json({notes: notes})
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const fetchNote = async (req,res) => {
    try {
    // Get id off the url
    const noteId = req.params.id;

    // Find the note using that id
    const note = await Note.findById({_id: noteId, user: req.user._id});

    // Respond with the note
    res.json({note: note})
    } catch(err) {
            console.log(err);
            res.sendStatus(400);
    }
};

const createNote = async (req, res) => {
    try {
    // Get the sent in data off request body
    const titleVar = req.body.title;
    const bodyVar = req.body.body;

    // create a note with it
    const note = await Note.create({
        title: titleVar,
        body: bodyVar,
        user: req.user._id,
    });

    // respond with the new note
    res.json({note: note})
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const updateNote = async (req, res) => {
    try {
    //Get the id off the url
    const noteId = req.params.id;

    //get the data off req body
    const title = req.body.title;
    const body = req.body.body;

    // Find and update the record
    await Note.findOneAndUpdate({_id: noteId, user: req.user._id}, {
        title: title,
        body: body,
    })

    // find updated note
    const note = await Note.findById(noteId);

    // Respond with it
    res.json({note: note});
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const deleteNote = async (req,res) => {
    const noteId = req.params._id;

    await Note.deleteOne({id: noteId, user: req.user._id});

    res.json({'success': 'Record deleted'})
};

module.exports = {
    fetchNotes: fetchNotes,
    fetchNote: fetchNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote,
}