const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        console.log("DB connected Successfully")
    }).catch((error) => {
        console.log("Database Connection Failed);
        console.error(error);
        process.exit(1);
    })
};
