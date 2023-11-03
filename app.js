import express from "express";
import morgan from "morgan";
import tweetsRouter from './router/tweets.js';
const app = express();

app.use(express.json());
app.use(morgan("dev")); 

// 라우터
app.use('/tweets', tweetsRouter);
    

// 오류
app.use((req, res, next) => {
    res.sendStatus(404);
})

app.listen(8080); 