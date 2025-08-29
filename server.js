const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/signup", async(req, res) => {
    try{
        const {Username, Email, Password, DateOfBirth} = req.body;

        if(!Username){
            return res.status(400).json({message: "Username cannot be empty"});
        }
        if(!Email){
            return res.status(400).json({message: "Email cannot be empty"});
        }
        if(!Password || Password < 8 || Password > 16 ){
            return res.status(400).json({message: "Password cannot be empty"});
        }
        res.status(201).json({Username, Email, Password, DateOfBirth});
    }catch(error){
        console.error("Signup error", error);
        res.status(500).json({error: "Signup Failed"})
    }
})

app.listen(PORT, ()=>console.log(`Server is running successfully in http://localhost:${PORT}`));