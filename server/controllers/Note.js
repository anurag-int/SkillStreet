const Note = require("../models/Note");
const User = require("../models/User");


exports.createNote = async(req, res) => {
    try{
        const { title, content } = req.body;
        const id = req.user.id;

        if(!title || !content){
            return res.status(400).json({
                success : false,
                message : "All fields are required"
            })
        }

        if(title.length > 25 || content.length > 60){
            return res.status(400).json({
                success : false,
                message : "The Title Max. Limit is 15 characters & content Max. Limit is 50 characters"
            })
        }

        const note = await Note.create({ user_id : id, title : title, content : content });
        return res.status(201).json({
            status : true,
            message : "Note created successfully",
            data: note
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Please Try Again!"
        });
    }
}

exports.deleteNote = async(req, res) => {
    try{
        const id = req.params.id;
        console.log(id); // Check if id is received correctly


        const existNote = await Note.findById({_id : id});

        if(!existNote){
            return res.status(400).json({
                success : false,
                message : "Note Id Invalid"
            })
        }

        await Note.findByIdAndDelete(id);
        return res.status(200).json({
            status : true,
            message : "Note deleted successfully"
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Please Try Again!"
        });
    }
}

exports.updateNote = async(req, res) => {
    try{
        const id = req.params.id;
        const { title, content } = req.body;

        if(!title || !content){
            return res.status(400).json({
                success : false,
                message : "All Fields are required"
            })
        }

        if(title.length > 25 || content.length > 60){
            return res.status(400).json({
                success : false,
                message : "The Title Max. Limit is 15 characters & content Max. Limit is 50 characters"
            })
        }

        const existNote = await Note.findById({_id : id});

        if(!existNote){
            return res.status(400).json({
                success : false,
                message : "Note Id Invalid"
            })
        }

        const note = await Note.findByIdAndUpdate({_id : id}, { title, content }, { new: true });
        return res.status(200).json({
            status : true,
            message : "Note updated successfully",
            data: note
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Please Try Again!"
        });
    }
}

exports.getNotes = async(req, res) => {
    try{
        const id = req.user.id;
        const notes = await Note.find({user_id : id});
        
        if (!notes || notes.length === 0) {
            return res.status(404).json({
                status : false,
                message : "Notes not found"
            });
        }

        return res.status(200).json({
            status : true,
            message : "Notes fetched successfully",
            data: notes
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Please Try Again!"
        });
    }
}

exports.getSpecificNote = async(req, res) => {
    try{
        const id = req.params.id;
        const notes = await Note.findOne({_id : id});
        
        if (!notes || notes.length === 0) {
            return res.status(404).json({
                status : false,
                message : "Notes not found"
            });
        }

        const existNote = await Note.findById({_id : id});

        if(!existNote){
            return res.status(400).json({
                success : false,
                message : "Note Id Invalid"
            })
        }

        return res.status(200).json({
            status : true,
            message : "Notes fetched successfully",
            data: notes
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            status : false,
            message : "Please Try Again!"
        });
    }
}