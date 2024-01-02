const Note = require("../models/Note");

exports.createNote = async(req, res) => {
    try{
        
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Internal Server Error"
        })
    }
}

exports.deleteNote = async(req, res) => {
    try{

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Internal Server Error"
        })
    }
}

exports.updateNote = async(req, res) => {
    try{

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            message : false,
            message : "Internal Server Error"
        })
    }
}

exports.getNote = async(req, res) => {
    try{

    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            message : false,
            message : "Internal Server Error"
        })
    }
}
