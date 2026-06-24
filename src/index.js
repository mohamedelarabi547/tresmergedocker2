const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = 4000;
const app = express();
// connect to redis
const redis_port = 6379;
const redis_host = 'redis';
const redisclient = redis.createClient({
    url: `redis://${redis_host}:${redis_port}`,
});
redisclient.on('error', err => console.log('Redis Client Error', err));
redisclient.on('connect', ()=> console.log('connected to redis....'));
redisclient.connect();
// connect to mongodb
const DB_NAME= 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017 ;
const DB_HOST = 'mongo';


const URI = `mongodb://${DB_NAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect(URI).then(() => console.log("connected to mongo.")).catch(() => console.log("failed to connect"));

app.get('/', (req,res) => res.send('<h1> Hello Tresmerge!dev dev</h1>'));
app.listen(PORT , () =>console.log(`app is up and running on port: ${PORT}`));