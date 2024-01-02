const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    user_id : {
        type : String,
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    content : {
        type : String,
        required : true,
        trim : true
    }
},{ timestamps: true })

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;