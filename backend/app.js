import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();

//to link router files on app.js
import userRouter from './routes/user.router.js';
import blogRouter from './routes/blog.router.js';

//to load to cors function resolve cors problem
app.use(cors());

//to binary resource 
app.use(fileUpload());

//to load the configurations of body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));


//aplication level middilewre check base url
app.use("/user",userRouter);
app.use("/addblog",blogRouter);

app.listen(3001);
console.log("Server listen at link :http://localhost:3001");