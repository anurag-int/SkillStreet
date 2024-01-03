const express = require("express");
const router = express.Router();

const { createNote, deleteNote, updateNote, getNotes, getSpecificNote } = require("../controllers/Note");
const { auth } = require("../middlewares/auth");


router.get("/my-notes", auth, getNotes);
router.put("/update-note/:id", auth, updateNote);
router.delete("/delete-note", auth, deleteNote);
router.post("/create-note", auth, createNote);
router.get("/my-note/:id", auth, getSpecificNote);

module.exports = router;

    