const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("Database connection error");
});


module.exports = mongoose;

