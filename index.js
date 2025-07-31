const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');
app.use(express.json());
const userRoute = require('./routes/userRoutes');

app.use('/api/users', userRoute)

const PORT = process.env.PORT;

app.get('/', (req , res)=>{
    res.send("Hello world")
});


app.listen(PORT , ()=>{
    
    console.log(`Server is running on port http://localhost:${PORT}`);
    
})

