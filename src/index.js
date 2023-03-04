import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import cors from "cors";

import "./database.js";

//Routes Imports
import indexVehicles from "./Routes/vehicle.routes.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/vehicles", indexVehicles);

app.use(morgan("dev"));

app.listen(port);
console.log(`The server is running on ${port} port`);
