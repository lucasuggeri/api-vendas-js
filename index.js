import express from "express";
import { errors } from "celebrate";
import AppError from "./src/config/appError.js";

const app = express();

const port = 8080;

app.use(errors());

app.use(
    (error, req, res, next)=>{
        if (error instanceof AppError){
            return res.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            })
        }
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        })
    }   
);

app.get('/')

app.listen(port, ()=>{
    console.log('listening on port ', port)
})