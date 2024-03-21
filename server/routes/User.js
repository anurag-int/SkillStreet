const express = require("express");
const router = express.Router();

const { signup, login, logout } = require("../controllers/Auth");

router.post("/signup", signup);
router.post("/signin", login);
router.get("/logout", logout)

module.exports = router;
