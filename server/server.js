const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT || 4000;
const database = require("./config/database");
database.connect();
app.use(express.json());
app.use(cookieParser());

const noteRoutes = require("./routes/Note");
const userRoutes = require("./routes/User");


// routes
app.use("/api/v1/note", noteRoutes);
app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});



app.listen(PORT, ()=> {
    console.log(`Server is up at ${PORT}`);
})
