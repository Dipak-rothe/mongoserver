import dotenv from "dotenv";
import express from 'express';
import bodyparser from 'body-parser' ;             
import mongoose from "mongoose";
import route from './routes/userRoute.js';

const app=express();
dotenv.config();
const port=process.env.PORT;
const url=process.env.MONGOOSE_URL;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect(url)
    .then(()=>{
        
        app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })}
        
    )
    .catch((err)=>console.error("Connection Failed",err))
    app.use('/api',route);

    // {
    //     "name":"abcd",
    //     "email":"abcd@blackmail.com",
    //     "password":"123345",
    //     "age":21
    // }
    process.on('SIGINT',async ()=>{
        try{
            console.log("Connection Lost☠️");
            await mongoose.disconnect();
            process.exit(0);
        }
        catch(error){
            console.log("Problem with Connection");
        }
    });
    