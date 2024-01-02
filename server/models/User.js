const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        trim : true,
        required : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    note : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Note"
    },
    token: {
        type: String,
    },
}, 
    { timestamps: true }
);

const User = mongoose.model("Users", UserSchema)

module.exports = User;