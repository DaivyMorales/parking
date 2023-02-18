import express from 'express';
import {PORT} from './config.js';
 
const app = express()

app.listen(PORT)
console.log(`The server is running on ${PORT} port`);
