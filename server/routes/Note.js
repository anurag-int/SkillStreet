const express = require("express");
const router = express.Router();

const { createNote, deleteNote, updateNote, getNote } = require("../controllers/Note");
const { auth } = require("../middlewares/auth");


router.get("/your-note", auth, getNote);
router.put("/modify-note", auth, updateNote);
router.delete("/delete-note", auth, deleteNote);
router.post("/create-note", auth, createNote)

module.exports = router;

